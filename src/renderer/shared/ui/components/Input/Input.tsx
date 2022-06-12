import { COLORS } from '@/shared/constants/colors';
import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

type InputProps = JSX.IntrinsicElements['input'];

interface Props extends InputProps {
	className?: string;
}

export const Input: FC<Props> = ({ className, ...props }) => {
	return (
		<Root className={className}>
			<input type="text" {...props} />
		</Root>
	);
};

const Root = styled.div`
	input {
		background-color: ${COLORS.grayscale0};
		padding: 5px;
	}
`;
