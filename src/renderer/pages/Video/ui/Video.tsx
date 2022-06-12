import { useHistory } from '@/entities/history';
import { findImageHigh } from '@/shared/utils/findImageHigh';
import { useMatch } from '@tanstack/react-location';
import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/youtube';
import { Location } from '../model/loader';

export const VideoPage = () => {
	const {
		data: { res: videoData, error },
	} = useMatch<Location>();
	const { addHistoryItem } = useHistory();
	const isInitial = useRef(true);

	useEffect(() => {
		if (videoData && isInitial.current) {
			addHistoryItem({
				videoId: videoData.videoDetails.videoId,
				imgSrc: findImageHigh(videoData.videoDetails.thumbnails).url,
				title: videoData.videoDetails.title,
				views: +videoData.videoDetails.viewCount,
				date: videoData.videoDetails.uploadDate,
				author: videoData.videoDetails.author.name,
				authorId: videoData.videoDetails.author.id,
			});
			isInitial.current = false;
		}
	}, []);

	if (error || !videoData) return null;

	return (
		<div>
			Video
			<ReactPlayer
				url={videoData.videoDetails.video_url}
				controls
				config={{ playerVars: { modestbranding: 1 } }}
			/>
		</div>
	);
};
