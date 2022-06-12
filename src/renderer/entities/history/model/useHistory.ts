import { useAppStore, selectors } from '@/app/store';
import { useMemo } from 'react';

export const useHistory = () => {
	const history = useAppStore(selectors.history.selectHistory);
	const addHistoryItem = useAppStore(selectors.history.selectAddHistoryItem);
	const removeHistoryItem = useAppStore(
		selectors.history.selectRemoveHistoryItem,
	);
	const resetHistory = useAppStore(selectors.history.selectResetHistory);

	return useMemo(
		() => ({
			history,
			addHistoryItem,
			removeHistoryItem,
			hasHistoryItem: ({ videoId }: { videoId: string }) => {
				return history.find((item) => item.videoId === videoId);
			},
			resetHistory,
		}),
		[history],
	);
};
