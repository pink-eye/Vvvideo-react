import { youtubeScraper } from '@/shared/api/youtubeScraper';
import { useResponse } from '@/shared/hooks/useResponse';
import { query } from '@/shared/utils/query';
import { useCallback } from 'react';
import { Continuation } from 'ytsr';
import { filterItems } from '../lib/filterItems';

export interface UseContinuationArguments {
	initialData?: Youtube.SearchResult;
}

export const useContinuation = ({ initialData }: UseContinuationArguments) => {
	const [response, setResponse] = useResponse<Youtube.SearchResult>({
		data: initialData
			? {
					...initialData,
					items: [...filterItems(initialData.items)],
			  }
			: undefined,
		isLoading: false,
	});

	return [
		useCallback(async (continuation: Continuation) => {
			setResponse((prevValue) => ({
				...prevValue,
				isLoading: true,
			}));
			try {
				const { res } = await query(
					youtubeScraper.searchResultsMore({ continuation }),
				);

				setResponse((prevValue) => {
					if (prevValue.data === undefined) return prevValue;

					return {
						...prevValue,
						data: {
							...prevValue.data,
							items: [
								...(prevValue.data?.items || []),
								...filterItems(res?.items),
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
