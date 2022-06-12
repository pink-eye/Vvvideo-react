import { FC, memo } from 'react';
import { IconComponent } from '../types';

const SvgClock: FC<IconComponent> = ({ color = '#000', ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			xmlSpace="preserve"
			width={20}
			height={20}
			{...props}
		>
			<path d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm7 15h-7c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1s1 .4 1 1v8h6c.6 0 1 .4 1 1s-.4 1-1 1z" />
		</svg>
	);
};

const Memo = memo(SvgClock);
export default Memo;
