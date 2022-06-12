import { useAppStore, selectors } from '@/app/store';
import { useMemo } from 'react';

export const useSubscribe = () => {
	const subscriptions = useAppStore(
		selectors.subscriptions.selectSubscriptions,
	);
	const addSubscription = useAppStore(
		selectors.subscriptions.selectAddSubscription,
	);
	const removeSubscription = useAppStore(
		selectors.subscriptions.selectRemoveSubscription,
	);

	return useMemo(() => {
		const hasSubscription = ({ id }: { id: string }) => {
			return subscriptions.find((item) => item.id === id);
		};
		
		return {
			subscriptions,
			toggleSubscribe: ({ id }: Subscription) => {
				if (!hasSubscription({ id })) addSubscription({ id });
				else removeSubscription({ id });
			},
			hasSubscription,
		};
	}, [subscriptions]);
};
