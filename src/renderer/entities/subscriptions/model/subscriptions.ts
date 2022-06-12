import { StateCreator } from 'zustand';
import { AppStore, Mutators } from '@/app/store';

export interface SubscriptionsSlice {
	subscriptions: Subscription[];
	addSubscription: (payload: Subscription) => void;
	removeSubscription: (payload: Subscription) => void;
}

export const createSubscriptionsSlice: StateCreator<
	AppStore,
	Mutators,
	[],
	SubscriptionsSlice
> = (set, get) => ({
	subscriptions: [],
	addSubscription: (payload) =>
		set((state) => ({ subscriptions: [...state.subscriptions, payload] })),
	removeSubscription: (payload) =>
		set((state) => ({
			subscriptions: state.subscriptions.filter(
				(item) => item.id !== payload.id,
			),
		})),
});
