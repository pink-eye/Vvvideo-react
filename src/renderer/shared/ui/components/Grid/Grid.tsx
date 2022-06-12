import { VirtuosoGrid, VirtuosoGridProps } from 'react-virtuoso';
import styled from 'styled-components';

interface GeneralProps {
	type?: 'grid' | 'column';
}

type VirtualizedGidProps = GeneralProps & {
	isVirtualized: true;
} & VirtuosoGridProps;

type NotVirtualizedGidProps = GeneralProps & {
	isVirtualized?: false;
	children: JSX.Element | null;
};

export const Grid = (props: VirtualizedGidProps | NotVirtualizedGidProps) => {
	const { type = 'grid', children, isVirtualized, ...rest } = props;

	return isVirtualized ? (
		<VirtuosoGrid
			totalCount={0}
			components={{ List: Root as any, Item: ListItem as any }}
			{...rest}
		/>
	) : (
		<Root>{children}</Root>
	);
};

const Root = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	gap: 5px;
	overscroll-behavior: contain;
`;

const ListItem = styled.li``;
