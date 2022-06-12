import { youtubeChannelScrapers } from './youtubeChannel';
import { youtubeVideoScrapers } from './youtubeVideo';
import { youtubePlaylistsScrapers } from './youtubePlaylists';
import { youtubeSearchResultsScrapers } from './youtubeSearchResults';
import { youtubeSuggestionsScrapers } from './youtubeSuggestions';

export const scrapers = {
	...youtubeVideoScrapers,
	...youtubeChannelScrapers,
	...youtubePlaylistsScrapers,
	...youtubeSearchResultsScrapers,
	...youtubeSuggestionsScrapers,
};
