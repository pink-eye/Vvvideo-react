import { youtubeScraper } from '@/shared/api/youtubeScraper';
import { useResponse } from '@/shared/hooks/useResponse';
import { query } from '@/shared/utils/query';
import { useCallback } from 'react';

export interface UseContinuationArguments {
	initialData?: Youtube.ChannelVideos;
}

export const useContinuation = ({ initialData }: UseContinuationArguments) => {
	const [response, setResponse] = useResponse<Youtube.ChannelVideos>({
		data: initialData
			? {
					...initialData,
					items: [...initialData.items],
			  }
			: undefined,
		isLoading: false,
	});

	return [
		useCallback(async (continuation: string) => {
			setResponse((prevValue) => ({
				...prevValue,
				isLoading: true,
			}));
			try {
				const { res } = await query(
					youtubeScraper.channelVideosMore({ continuation }),
				);

				setResponse((prevValue) => {
					if (prevValue.data === undefined) return prevValue;

					return {
						...prevValue,
						data: {
							...prevValue.data,
							items: [
								...(prevValue.data?.items || []),
								...(res?.items || []),
							],
							continuation: res?.continuation || null,
						},
					};
				});
			} catch (error) {
				setResponse((prevValue) => ({ ...prevValue, error }));
			} finally {
				setResponse((prevValue) => ({
					...prevValue,
					isLoading: false,
				}));
			}
		}, []),
		response,
	] as const;
};
