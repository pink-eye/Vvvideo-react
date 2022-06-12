import { StateCreator } from 'zustand';
import { AppStore, Mutators } from '@/app/store';

export interface HistorySlice {
	history: HistoryItem[];
	addHistoryItem: (payload: HistoryItem) => void;
	removeHistoryItem: (payload: { videoId: string }) => void;
	resetHistory: () => void;
}

export const createHistorySlice: StateCreator<
	AppStore,
	Mutators,
	[],
	HistorySlice
> = (set, get) => ({
	history: [],
	addHistoryItem: (payload) =>
		set((state) => ({ history: [payload, ...state.history] })),
	removeHistoryItem: (payload) =>
		set((state) => ({
			history: state.history.filter(
				(item) => item.videoId !== payload.videoId,
			),
		})),
	resetHistory: () => set(() => ({ history: [] })),
});
