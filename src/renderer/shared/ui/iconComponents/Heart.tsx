import { FC, memo } from 'react';
import { IconComponent } from '../types';

const SvgHeart: FC<IconComponent> = ({ color = '#000', ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 472.7 472.7"
			xmlSpace="preserve"
			width={20}
			height={20}
			{...props}
		>
			<path d="M433.5 67c-25.3-25.3-59-39.3-94.8-39.3s-69.6 14-94.9 39.4l-7.3 7.3-7.5-7.5c-25.4-25.4-59.1-39.4-95-39.4-35.8 0-69.4 13.9-94.7 39.3C13.9 92.2 0 125.9 0 161.7s14 69.5 39.4 94.8l182.7 182.7c3.8 3.8 9 6 14.5 6 5.4 0 10.6-2.2 14.5-6l182.2-182.4c25.4-25.4 39.3-59.1 39.4-94.9S458.8 92.4 433.5 67zm-301 50.2c-23.9 0-43.4 19.5-43.4 43.4 0 11-8.9 19.9-19.9 19.9s-19.9-8.9-19.9-19.9c0-45.8 37.3-83.1 83.1-83.1 11 0 19.9 8.9 19.9 19.9.1 11-8.8 19.8-19.8 19.8z" />
		</svg>
	);
};

const Memo = memo(SvgHeart);
export default Memo;
