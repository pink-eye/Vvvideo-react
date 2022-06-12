import { FC, memo } from 'react';
import { IconComponent } from '../types';

const SvgHome: FC<IconComponent> = ({ color = '#000', ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={20}
			height={20}
			viewBox="0 0 45.973 45.972"
			xmlSpace="preserve"
			{...props}
		>
			<path d="M44.752 20.914 25.935 2.094a4.168 4.168 0 0 0-5.893 0L1.221 20.914a4.142 4.142 0 0 0-.903 4.525 4.155 4.155 0 0 0 3.85 2.557h2.404v13.461a3.621 3.621 0 0 0 3.621 3.642h3.203V32.93c0-.927.766-1.651 1.692-1.651h6.223c.926 0 1.673.725 1.673 1.651v12.168h12.799c2.013 0 3.612-1.629 3.612-3.642v-13.46h2.411c1.685 0 3.204-1 3.85-2.557a4.143 4.143 0 0 0-.904-4.525z" />
		</svg>
	);
};

const Memo = memo(SvgHome);
export default Memo;
