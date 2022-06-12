const youtubeSuggest = require('youtube-suggest');

export const youtubeSuggestionsScrapers = {
	scrapeSuggests: (query: string): Promise<string[]> => youtubeSuggest(query),
};
