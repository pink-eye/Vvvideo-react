import { Route } from '@tanstack/react-location';
import { loader as channelLoader } from '@/pages/Channel';
import { loader as searchLoader } from '@/pages/Search';
import { loader as videoLoader } from '@/pages/Video';

const elements = {
	channel: () =>
		import('../../pages/Channel').then((mod) => <mod.ChannelPage />),
	history: () =>
		import('../../pages/History').then((mod) => <mod.HistoryPage />),
	latest: () =>
		import('../../pages/Latest').then((mod) => <mod.LatestPage />),
	search: () =>
		import('../../pages/Search').then((mod) => <mod.SearchPage />),
	subscriptions: () =>
		import('../../pages/Subscriptions').then((mod) => (
			<mod.SubscriptionsPage />
		)),
	video: () => import('../../pages/Video').then((mod) => <mod.VideoPage />),
};

export const routes: Route<any>[] = [
	{
		path: '/history',
		element: elements.history,
	},
	{
		path: '/',
		element: elements.latest,
	},
	{ path: '/subscriptions', element: elements.subscriptions },
	{
		path: '/channel/:channelId',
		element: elements.channel,
		loader: channelLoader,
	},
	{
		path: '/search/:query',
		element: elements.search,
		loader: searchLoader,
	},
	{
		path: '/video/:videoId',
		element: elements.video,
		loader: videoLoader,
	},
];
