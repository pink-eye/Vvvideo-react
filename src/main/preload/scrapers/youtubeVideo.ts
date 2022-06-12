import ytdl from 'ytdl-core';
import { YOUTUBE_URL } from '../shared/constants/youtubeUrl';
import { Agent, makeAgent } from '../shared/utils/makeAgent';

export const youtubeVideoScrapers = {
	scrapeVideo: (videoId: string, obj?: Agent) =>
		ytdl.getInfo(YOUTUBE_URL.video(videoId), {
			...(obj ? { requestOptions: { agent: makeAgent(obj) } } : {}),
		}),
};
