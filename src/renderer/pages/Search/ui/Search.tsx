import { useOpenPages } from '@/features/openPages';
import { ChannelCard } from '@/shared/ui/components/ChannelCard';
import { Grid } from '@/shared/ui/components/Grid';
import { VideoCard } from '@/shared/ui/components/VideoCard';
import { useMatch } from '@tanstack/react-location';
import styled from 'styled-components';
import { filterItems } from '../lib/filterItems';
import { Location } from '../model/loader';
import { useContinuation } from '../model/useContinuation';

export const SearchPage = () => {
	const {
		data: { res: searchResults },
	} = useMatch<Location>();
	const { openVideo, openChannel } = useOpenPages();
	const [trigger, { data, isLoading }] = useContinuation({
		initialData: searchResults,
	});

	const handleEndReached = () => {
		if (!data?.continuation) return;

		trigger(data.continuation);
	};

	if (!searchResults || !data) return null;

	return (
		<Root>
			<h2>SEARCH RESULTS</h2>
			<Content>
				<Grid
					isVirtualized
					totalCount={filterItems(data.items).length}
					endReached={handleEndReached}
					itemContent={(index) => {
						const item = data.items[index];

						switch (item?.type) {
							case 'video':
								return (
									<VideoCard
										imgSrc={item.bestThumbnail.url}
										title={item.title}
										views={item.views}
										date={item.uploadedAt}
										author={item.author?.name}
										onClick={() =>
											openVideo({ id: item.id })
										}
										onAuthor={() => {
											if (item.author?.channelID) {
												openChannel({
													id: item.author.channelID,
												});
											}
										}}
									/>
								);
							case 'channel':
								return (
									<ChannelCard
										imgSrc={item.bestAvatar.url}
										author={item.name}
										description={item.descriptionShort}
										subscriberCount={item.subscribers}
										videoCount={item.videos}
										onClick={() =>
											openChannel({
												id: item.channelID,
											})
										}
									/>
								);
							default:
								return null;
						}
					}}
				></Grid>
			</Content>
		</Root>
	);
};

const Root = styled.section`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const Content = styled.div`
	flex: 1 1 auto;
`;
