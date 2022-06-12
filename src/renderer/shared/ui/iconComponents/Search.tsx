import { FC, memo } from 'react';
import { IconComponent } from '../types';

const SvgSearch: FC<IconComponent> = ({ color = '#000', ...props }) => {
	return (
		<svg
			width={20}
			height={20}
			viewBox="0 -0.02 28.045 28.045"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g data-name="Lager 10">
				<path
					data-name="Path 14"
					d="M12 4a7.987 7.987 0 0 1 6.52 12.619l-.789 1.112-1.112.789A8 8 0 1 1 12 4m0-4a12 12 0 1 0 6.936 21.781l5.635 5.636a1.993 1.993 0 0 0 2.817 0l.029-.029a1.9 1.9 0 0 0 0-2.817l-5.636-5.635A11.988 11.988 0 0 0 12 0Z"
				/>
			</g>
		</svg>
	);
};

const Memo = memo(SvgSearch);
export default Memo;
