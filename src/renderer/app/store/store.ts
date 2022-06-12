import create from 'zustand';
import { AppStore } from './slices';
import { createSubscriptionsSlice } from '@/entities/subscriptions';
import { createHistorySlice } from '@/entities/history';
import { persist, devtools } from 'zustand/middleware';
// import { fileStorage } from './FileStorage';

export const useAppStore = create<AppStore>()(
	persist(
		devtools((...a) => ({
			...createSubscriptionsSlice(...a),
			...createHistorySlice(...a),
		})),
		// {
		// 	name: 'file-storage',
		// 	getStorage: () => fileStorage,
		// },
	),
);

export * from './slices';
