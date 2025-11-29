import { baseApi } from '@/lib/api';
import { TUser } from './types';
import { cookies } from 'next/headers';
import { cache } from 'react';

export const getUser = cache(async (): Promise<TUser | null> => {
	const token = (await cookies()).get('token')?.value;
	if (!token) return null;

	try {
		const user = await baseApi.get<TUser>('/users/me', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (!user.status) {
			throw new Error('статус:' + user.status);
		}

		return user.data;
	} catch (err) {
		console.error('Ошибка получения юзера:' + err);
		return null;
	}
});
