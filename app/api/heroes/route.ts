import { ProxyRequest } from '@/lib/api';

export default async function GET() {
	return ProxyRequest({
		externalUrl: '/heroes',
		includeToken: true,
		method: 'GET',
	});
}
