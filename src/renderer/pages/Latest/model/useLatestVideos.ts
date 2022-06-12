import { useAppStore } from '@/app/store';
import { youtubeScraper } from '@/shared/api/youtubeScraper';
import { useResponse, Response } from '@/shared/hooks/useResponse';
import { calculatePublishedDate } from '@/shared/utils/calculatePublishedDate';
import { useEffect } from 'react';

export const useLatestVideos = (): Response<
	Youtube.ChannelVideosItemWithPublishedDate[]
> => {
	const subscriptions = useAppStore((state) => state.subscriptions);
	const [response, setResponse] =
		useResponse<Youtube.ChannelVideosItemWithPublishedDate[]>();

	useEffect(() => {
		if (!subscriptions.length) return;

		const fetchLatestVideos = async () => {
			let promises = [] as Promise<
				Youtube.ChannelVideosItemWithPublishedDate[]
			>[];

			subscriptions.forEach((item) => {
				promises.push(
					youtubeScraper
						.channelVideos({ channelId: item.id })
						.then(({ items }) => {
							const videos = items.map((video) => {
								return {
									...video,
									publishedDate: video.liveNow
										? new Date().getTime()
										: calculatePublishedDate(
												video.publishedText,
										  ),
								};
							});

							return videos;
						}),
				);
			});

			setResponse({ isLoading: true });
			try {
				const data = await Promise.all(promises);

				setResponse((prevValue) => ({
					...prevValue,
					data: data.flat().sort((a, b) => {
						const diff = +b.publishedDate - +a.publishedDate;

						return diff !== 0
							? diff
							: a.author.localeCompare(b.author);
					}),
				}));
			} catch (error) {
				setResponse((prevValue) => ({ ...prevValue, error }));
			} finally {
				setResponse((prevValue) => ({
					...prevValue,
					isLoading: false,
				}));
			}
		};

		fetchLatestVideos();
	}, [subscriptions]);

	return response;
};
