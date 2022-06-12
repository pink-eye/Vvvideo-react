import { youtubeScraper } from '@/shared/api/youtubeScraper';
import { query, QueryReturn } from '@/shared/utils/query';
import { LoaderFn, MakeGenerics } from '@tanstack/react-location';

export type Location = MakeGenerics<{
	LoaderData: QueryReturn<Youtube.SearchResult>;
	Params: { query: string };
}>;

export const loader: LoaderFn<Location> = async ({ params }) => {
	return await query(youtubeScraper.searchResults({ query: params.query }));
};
