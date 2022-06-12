import ytsr, { Continuation, Options } from 'ytsr';
import { Agent, makeAgent } from '../shared/utils/makeAgent';

export const youtubeSearchResultsScrapers = {
	scrapeSearchResults: (
		query: string,
		options: Options = { pages: 1 },
		obj?: Agent,
	) =>
		ytsr(query, {
			...options,
			...(obj ? { requestOptions: { agent: makeAgent(obj) } } : {}),
		}),

	scrapeSearchResultsMore: (continuation: Continuation) =>
		ytsr.continueReq(continuation),
};
