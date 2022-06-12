import { useNavigate } from '@tanstack/react-location';
import { useCallback, useMemo } from 'react';

export const useOpenPages = () => {
	const navigate = useNavigate();

	return useMemo(
		() => ({
			openChannel: ({ id }: { id: string }) =>
				navigate({ to: `/channel/${id}` }),
			openVideo: ({ id }: { id: string }) =>
				navigate({ to: `/video/${id}` }),
			openSearch: (query: string) => {
				navigate({ to: `/search/${query}` });
			},
		}),
		[],
	);
};
