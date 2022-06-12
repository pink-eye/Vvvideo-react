import { useOpenPages } from '@/features/openPages';
import { COLORS } from '@/shared/constants/colors';
import { SearchInput } from '@/shared/ui/components/SearchInput';
import { useLocation } from '@tanstack/react-location';
import { FC, memo, useCallback, useState } from 'react';
import styled from 'styled-components';

interface Props {
	className?: string;
}

export const Header: FC<Props> = memo((props) => {
	const [searchValue, setSearchValue] = useState('');

	const { openSearch } = useOpenPages();
	const { history } = useLocation();

	const handleChange = useCallback((value: string) => {
		setSearchValue(value);
	}, []);

	return (
		<Root {...props}>
			<SearchInput onSearch={openSearch} onChange={handleChange} />
			<button onClick={history.back}>Back</button>
			<button onClick={history.forward}>Forward</button>
		</Root>
	);
});

const Root = styled.header`
	padding-inline: 15px;
	width: 100%;
	background-color: ${COLORS.grayscale600};
`;
