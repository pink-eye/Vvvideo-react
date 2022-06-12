import { useEffect } from 'react';
import { useResponse } from './useResponse';

export interface UseQueryOptions {
	skip?: boolean;
	deps?: any;
}

export const useQuery = <T = any>(
	callback: () => Promise<T>,
	options?: UseQueryOptions,
) => {
	const [response, setResponse] = useResponse<T>();

	useEffect(() => {
		if (options?.skip) return;

		const effect = async () => {
			setResponse({ isLoading: true });
			try {
				const data = await callback();
				setResponse((prevValue) => ({ ...prevValue, data }));
			} catch (error) {
				setResponse((prevValue) => ({ ...prevValue, error }));
			} finally {
				setResponse((prevValue) => ({
					...prevValue,
					isLoading: false,
				}));
			}
		};

		effect();
	}, [options?.skip, options?.deps]);

	return response;
};
