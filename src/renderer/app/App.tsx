import './styles/reset.css';
import './styles/global.css';
import { COLORS } from '@/shared/constants/colors';
import { Header } from '@/widgets/Header';
import { SideNavigation } from '@/widgets/SideNavigation';
import styled from 'styled-components';
import { Outlet, useRouter } from '@tanstack/react-location';
import { withProviders } from './providers';

const App = () => {
	const router = useRouter();

	return (
		<Root>
			<StyledHeader />
			<Main>
				<Aside>
					<SideNavigation />
				</Aside>
				<Content>
					{!!router.pending ? <div>LOADING...</div> : <Outlet />}
				</Content>
			</Main>
		</Root>
	);
};

export default withProviders(<App />);

const Root = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${COLORS.grayscale700};
`;

const StyledHeader = styled(Header)`
	flex-shrink: 0;
`;

const Main = styled.main`
	display: grid;
	grid-template-columns: 80px 1fr;
	grid-gap: 0.5rem;
`;

const Aside = styled.aside`
	position: sticky;
	top: 1rem;
	align-self: start;
`;

const Content = styled.div`
	font-size: 40px;
`;
