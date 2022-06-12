import { useMemo, useState } from 'react';

type UseToggleReturn = [boolean, [() => void, () => void, () => void]];

export const useToggle = (initialState: boolean = false): UseToggleReturn => {
	const [state, setState] = useState(initialState);

	const { toggle, open, close } = useMemo(
		() => ({
			toggle: () => setState((state) => !state),
			open: () => setState(true),
			close: () => setState(false),
		}),
		[],
	);

	return [state, [toggle, open, close]];
};
