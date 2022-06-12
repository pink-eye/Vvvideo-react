import { AppStore } from '@/app/store';

export const selectHistory = (state: AppStore) => state.history;
export const selectAddHistoryItem = (state: AppStore) => state.addHistoryItem;
export const selectRemoveHistoryItem = (state: AppStore) =>
	state.removeHistoryItem;

export const selectResetHistory = (state: AppStore) => state.resetHistory;
