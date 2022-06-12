import { useHistory } from '@/entities/history';
import { useOpenPages } from '@/features/openPages';
import { Grid } from '@/shared/ui/components/Grid';
import { VideoCard } from '@/shared/ui/components/VideoCard';
import styled from 'styled-components';

export const HistoryPage = () => {
	const { history, removeHistoryItem } = useHistory();
	const { openVideo, openChannel } = useOpenPages();

	if (!history.length) return <div>NOTHING</div>;

	return (
		<Root>
			<div>History</div>
			<Content>
				<Grid
					isVirtualized
					totalCount={history.length}
					itemContent={(index) => {
						const video = history[index];

						return (
							<VideoCard
								isHistory
								onDelete={() => {
									removeHistoryItem({
										videoId: video.videoId,
									});
								}}
								imgSrc={video?.imgSrc}
								onClick={() => openVideo({ id: video.videoId })}
								onAuthor={() =>
									openChannel({ id: video.authorId })
								}
								title={video.title}
								views={video.views}
								date={video.date}
								author={video.author}
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
