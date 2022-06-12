import { AppStore } from '@/app/store';

export const selectSubscriptions = (state: AppStore) => state.subscriptions;
export const selectAddSubscription = (state: AppStore) => state.addSubscription;
export const selectRemoveSubscription = (state: AppStore) =>
	state.removeSubscription;
