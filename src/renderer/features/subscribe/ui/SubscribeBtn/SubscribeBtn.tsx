import { FC, memo } from 'react';
import { useSubscribe } from '../../../../entities/subscriptions/model/useSubscribe';

interface Props {
	channelId: string;
}

export const SubscribeBtn: FC<Props> = memo(({ channelId }) => {
	const { hasSubscription, toggleSubscribe } = useSubscribe();

	const isSubscribed = hasSubscription({ id: channelId });

	const handleClick = () => {
		toggleSubscribe({ id: channelId });
	};

	return (
		<button onClick={handleClick}>
			{!isSubscribed ? 'Subscribe' : 'Unsubscribe'}
		</button>
	);
});
