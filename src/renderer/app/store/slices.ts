import * as subscriptions from '@/entities/subscriptions';
import { SubscriptionsSlice } from '@/entities/subscriptions';
import * as history from '@/entities/history';
import { HistorySlice } from '@/entities/history';

export type AppStore = SubscriptionsSlice & HistorySlice;
export type Mutators = [['zustand/persist', any], ['zustand/devtools', never]];

export const selectors = {
	history: history.selectors,
	subscriptions: subscriptions.selectors,
};
