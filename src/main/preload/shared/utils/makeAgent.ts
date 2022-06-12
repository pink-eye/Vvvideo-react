import SocksProxyAgent from 'socks-proxy-agent';
import HttpProxyAgent from 'http-proxy-agent';
import HttpsProxyAgent from 'https-proxy-agent';

export interface Agent {
	protocol: 'socks4' | 'socks5' | 'http' | 'https';
	host: string;
	port?: string | number;
	type?: 4 | 5;
}

type MakeAgentReturn =
	| typeof HttpProxyAgent
	| typeof HttpsProxyAgent
	| typeof SocksProxyAgent;

export const makeAgent = (obj: Agent): MakeAgentReturn => {
	switch (obj.protocol) {
		case 'http':
			return new (HttpProxyAgent as any)({
				host: obj.host,
				port: obj.port,
			});

		case 'https':
			return new (HttpsProxyAgent as any)({
				host: obj.host,
				port: obj.port,
			});

		case 'socks4':
			return new (SocksProxyAgent as any)({
				host: obj.host,
				port: obj.port,
				type: 4,
			});

		case 'socks5':
			return new (SocksProxyAgent as any)({
				host: obj.host,
				port: obj.port,
				type: 5,
			});
	}
};
