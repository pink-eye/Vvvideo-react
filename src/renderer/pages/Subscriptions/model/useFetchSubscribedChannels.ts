import { useAppStore } from '@/app/store';
import { youtubeScraper } from '@/shared/api/youtubeScraper';
import { useResponse, Response } from '@/shared/hooks/useResponse';
import { useEffect } from 'react';

export const useFetchSubscribedChannels = (): Response<
	Youtube.ChannelInfo[]
> => {
	const subscriptions = useAppStore((state) => state.subscriptions);
	const [response, setResponse] = useResponse<Youtube.ChannelInfo[]>();

	useEffect(() => {
		if (!subscriptions.length) return;

		const fetchChannelsInfo = async () => {
			let promises = [] as Promise<Youtube.ChannelInfo>[];

			subscriptions.forEach((item) => {
				promises.push(youtubeScraper.channel({ channelId: item.id }));
			});

			setResponse({ isLoading: true });
			try {
				const data = await Promise.all(promises);
				setResponse((prevValue) => ({ ...prevValue, data }));
			} catch (error) {
				setResponse((prevValue) => ({ ...prevValue, error }));
			} finally {
				setResponse((prevValue) => ({
					...prevValue,
					isLoading: false,
				}));
			}
		};

		fetchChannelsInfo();
	}, [subscriptions]);

	return response;
};
