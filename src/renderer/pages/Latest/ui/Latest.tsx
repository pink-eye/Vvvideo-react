import { useHistory } from '@/entities/history';
import { useOpenPages } from '@/features/openPages';
import { Grid } from '@/shared/ui/components/Grid';
import { VideoCard } from '@/shared/ui/components/VideoCard';
import styled from 'styled-components';
import { useLatestVideos } from '../model/useLatestVideos';

export const LatestPage = () => {
	const { data, isLoading, error } = useLatestVideos();
	const { openVideo, openChannel } = useOpenPages();
	const { hasHistoryItem } = useHistory();

	if (isLoading) return <div>LOADING...</div>;

	if (error || !data) return <div>NOTHING</div>;

	return (
		<Root>
			<div>Latest</div>
			<Content>
				<Grid
					isVirtualized
					totalCount={data.length}
					itemContent={(index) => {
						const video = data[index];

						return (
							<VideoCard
								imgSrc={video?.videoThumbnails?.[3].url}
								onClick={() => openVideo({ id: video.videoId })}
								onAuthor={() =>
									openChannel({ id: video.authorId })
								}
								title={video.title}
								views={video.viewCount}
								date={video.publishedText}
								author={video.author}
								isWatched={
									!!hasHistoryItem({
										videoId: video.videoId,
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
