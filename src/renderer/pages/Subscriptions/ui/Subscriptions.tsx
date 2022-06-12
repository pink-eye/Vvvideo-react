import { useOpenPages } from '@/features/openPages';
import { ChannelCard } from '@/shared/ui/components/ChannelCard';
import { Grid } from '@/shared/ui/components/Grid';
import { useFetchSubscribedChannels } from '../model/useFetchSubscribedChannels';

export const SubscriptionsPage = () => {
	const { data, isLoading, error } = useFetchSubscribedChannels();
	const { openChannel } = useOpenPages();

	if (isLoading) return <div>LOADING...</div>;

	if (!data || error) return <div>NOTHING</div>;

	return (
		<>
			<div>Subscriptions</div>
			<Grid
				isVirtualized
				totalCount={data?.length}
				itemContent={(index) => {
					return (
						<ChannelCard
							imgSrc={data[index].authorThumbnails?.[0].url}
							description={data[index].description}
							subscriberCount={`${data[index].subscriberCount}`}
							videoCount={0}
							author={data[index].author}
							onClick={() =>
								openChannel({ id: data[index].authorId })
							}
						/>
					);
				}}
			/>
		</>
	);
};
