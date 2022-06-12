declare const API: typeof import('main/preload/api').api;

declare namespace Youtube {
	export type SearchResult = import('ytsr').Result;
	export type SearchContinueResult = import('ytsr').ContinueResult;
	export type SearchResultItem = import('ytsr').Item;
	export type ChannelVideos = Awaited<
		ReturnType<typeof API.scrapeChannelVideos>
	>;
	export type ChannelVideosItem = ReturnType<
		typeof API.scrapeChannelVideos
	>['items'][0];
	export type ChannelVideosItemWithPublishedDate = ChannelVideosItem & {
		publishedDate: string | number;
	};
	export type VideoInfo = import('ytdl-core').videoInfo;
	export type ChannelInfo = Awaited<ReturnType<typeof API.scrapeChannelInfo>>;
}

declare type Subscription = {
	id: string;
};

declare type HistoryItem = {
	videoId: string;
	imgSrc?: string | null;
	title: string;
	views?: number | null;
	date?: string | null;
	author?: string | null;
	authorId: string;
};
