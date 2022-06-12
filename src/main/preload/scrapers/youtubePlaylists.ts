import ytpl from 'ytpl';
import { Agent, makeAgent } from '../shared/utils/makeAgent';

export const youtubePlaylistsScrapers = {
	scrapePlaylistVideos: (playlistId: string, obj?: Agent) =>
		ytpl(playlistId, {
			...(obj ? { requestOptions: { agent: makeAgent(obj) } } : {}),
		}),
};
