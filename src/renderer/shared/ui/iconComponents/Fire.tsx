import { FC, memo } from 'react';
import { IconComponent } from '../types';

const SvgFire: FC<IconComponent> = ({ color = '#000', ...props }) => {
	return (
		<svg
			width={20}
			height={20}
			viewBox="0 0 8 8"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M2 0c1 2-2 3-2 5s2 3 2 3c-.98-1.98 2-3 2-5S2 0 2 0zm3 3c1 2-2 3-2 5h3c.4 0 1-.5 1-2 0-2-2-3-2-3z" />
		</svg>
	);
};

const Memo = memo(SvgFire);
export default Memo;
