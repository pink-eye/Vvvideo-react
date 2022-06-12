import { Continuation } from 'ytsr';

const YoutubeScraper = () => {
	return {
		video: ({ videoId }: { videoId: string }) => API.scrapeVideo(videoId),

		channel: ({ channelId }: { channelId: string }) =>
			API.scrapeChannelInfo(channelId),

		channelVideos: ({ channelId }: { channelId: string }) =>
			API.scrapeChannelVideos(channelId),

		channelPlaylists: ({ channelId }: { channelId: string }) =>
			API.scrapeChannelPlaylists(channelId),

		channelVideosMore: ({ continuation }: { continuation: string }) =>
			API.scrapeChannelVideosMore(continuation),

		channelPlaylistsMore: ({ continuation }: { continuation: string }) =>
			API.scrapeChannelPlaylistsMore(continuation),

		playlistVideos: ({ playlistId }: { playlistId: string }) =>
			API.scrapePlaylistVideos(playlistId),

		searchResults: ({ query }: { query: string }) =>
			API.scrapeSearchResults(query),

		searchResultsMore: ({ continuation }: { continuation: Continuation }) =>
			API.scrapeSearchResultsMore(continuation),
	};
};

export const youtubeScraper = YoutubeScraper();
