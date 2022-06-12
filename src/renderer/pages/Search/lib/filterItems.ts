export const filterItems = (items?: Youtube.SearchResult['items']) => {
	return items?.filter(
		(item) => item.type === 'video' || item.type === 'channel',
	) ?? [];
};
