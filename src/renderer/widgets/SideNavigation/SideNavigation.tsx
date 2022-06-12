import { COLORS } from '@/shared/constants/colors';
import Clock from '@/shared/ui/iconComponents/Clock';
import Home from '@/shared/ui/iconComponents/Home';
import Users from '@/shared/ui/iconComponents/Users';
import { Link } from '@tanstack/react-location';
import { FC, memo } from 'react';
import styled from 'styled-components';

interface Props {
	className?: string;
}

export const SideNavigation: FC<Props> = memo((props) => {
	return (
		<Root {...props}>
			<ul>
				<li>
					<Link to="/">
						<Button>
							<Home fill="currentColor" />
						</Button>
					</Link>
				</li>
				{/* <li>
					<Link to="/trending">
						<Button>
							<Fire fill="currentColor" />
						</Button>
					</Link>
				</li> */}
				<li>
					<Link to="/subscriptions">
						<Button>
							<Users fill="currentColor" />
						</Button>
					</Link>
				</li>
				<li>
					<Link to="/history">
						<Button>
							<Clock fill="currentColor" />
						</Button>
					</Link>
				</li>
			</ul>
		</Root>
	);
});

const Root = styled.nav`
	min-height: 100vh;
	background-color: ${COLORS.grayscale500};
	max-width: 80px;
`;

const Button = styled.button`
	width: 100%;
	aspect-ratio: 1 / 1;
	padding: 10px;
	display: grid;
	place-items: center;
	color: ${COLORS.grayscaleBlueLight};

	:hover {
		background-color: ${COLORS.grayscale400};
	}
`;
