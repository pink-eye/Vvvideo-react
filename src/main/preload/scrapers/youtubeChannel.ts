import ytch from 'yt-channel-info';

export const youtubeChannelScrapers = {
	scrapeChannelInfo: (channelId: string) =>
		ytch.getChannelInfo({ channelId }),

	scrapeChannelVideos: (channelId: string) =>
		new Promise<ReturnType<typeof ytch.getChannelVideos>>((resolve) =>
			resolve(ytch.getChannelVideos({ channelId })),
		),

	scrapeChannelPlaylists: (channelId: string) =>
		ytch.getChannelPlaylistInfo({ channelId }),

	scrapeChannelVideosMore: (continuation: string) =>
		ytch.getChannelVideosMore({ continuation }),

	scrapeChannelPlaylistsMore: (continuation: string) =>
		ytch.getChannelPlaylistsMore({ continuation }),
};
