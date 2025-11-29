'use server';

import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const baseApiUrl = 'https://pet-cloud.online/api';

export const baseApi = axios.create({
	baseURL: baseApiUrl,
	headers: {
		'Content-Type': 'application/json',
	},
});

type TProxyRequest<TBody> = {
	externalUrl: string;
	includeToken: boolean;
	method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
	body?: TBody;
};

export const ProxyRequest = async <TBody>({
	externalUrl,
	includeToken,
	method,
	body,
}: TProxyRequest<TBody>) => {
	try {
		const res = await axios.request({
			url: baseApiUrl + externalUrl,
			headers: {
				'Content-Type': 'application/json',
				...(includeToken
					? { Authorization: (await cookies()).get('token')?.value || null }
					: {}),
			},
			...(method !== 'GET' && method !== 'DELETE' ? { data: body } : {}),
		});

		return NextResponse.json(res.data, { status: res.status });
	} catch (err) {
		const error = err as AxiosError;
		const status = error?.response?.status || 500;
		const message = error?.response?.data || { message: 'Ошибка прокси' };
		return NextResponse.json(message, { status });
	}
};
