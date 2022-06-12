import { useResponse } from '@/shared/hooks/useResponse';
import { useEffect } from 'react';

export const useSuggestions = (query: string) => {
	const [response, setResponse] = useResponse<string[]>({
		isLoading: false,
	});

	useEffect(() => {
		const effect = () => {
			// setResponse((prevValue) => ({ ...prevValue, isLoading: true }));
			// try {
			// 	console.log('effect > data', data);
			// 	setResponse((prevValue) => ({ ...prevValue, data }));
			// } catch (error) {
			// 	console.log('effect > error', error);
			// 	setResponse((prevValue) => ({ ...prevValue, error }));
			// } finally {
			// 	setResponse((prevValue) => ({
			// 		...prevValue,
			// 		isLoading: false,
			// 	}));
			// }
		};

		effect();
	}, [query]);

	return response;
};
