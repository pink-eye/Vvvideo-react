import { routes, location } from '@/processes/router';
import { Router } from '@tanstack/react-location';
import { ReactElement } from 'react';

export const withRouter = (component: ReactElement) => {
	return (
		<Router location={location} routes={routes}>
			{component}
		</Router>
	);
};
