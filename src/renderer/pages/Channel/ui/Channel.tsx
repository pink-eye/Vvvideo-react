import { useOpenPages } from '@/features/openPages';
import { SubscribeBtn } from '@/features/subscribe';
import { Grid } from '@/shared/ui/components/Grid';
import { VideoCard } from '@/shared/ui/components/VideoCard';
import { useMatch } from '@tanstack/react-location';
import styled from 'styled-components';
import { Location } from '../model/loader';
import { useContinuation } from '../model/useContinuation';

export const ChannelPage = () => {
	const {
		data: { res: channelVideos, error },
	} = useMatch<Location>();
	const { openVideo, openChannel } = useOpenPages();
	const [trigger, { data, isLoading }] = useContinuation({
		initialData: channelVideos,
	});

	const handleEndReached = () => {
		if (!data?.continuation) return;

		trigger(data.continuation);
	};

	if (error || !data || !data.items.length) return null;

	const channelId = data.items[0].authorId;

	return (
		<Root>
			<div>
				<SubscribeBtn channelId={channelId} />
			</div>
			<Content>
				<Grid
					isVirtualized
					totalCount={data?.items.length}
					endReached={handleEndReached}
					itemContent={(index) => {
						const channelVideo = data.items[index];
						return (
							<VideoCard
								imgSrc={channelVideo?.videoThumbnails?.[3].url}
								title={channelVideo.title}
								views={channelVideo.viewCount}
								date={channelVideo.publishedText}
								author={channelVideo.author}
								onClick={() =>
									openVideo({
										id: channelVideo.videoId,
									})
								}
								onAuthor={() =>
									openChannel({
										id: channelVideo.authorId,
									})
								}
							/>
						);
					}}
				/>
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
