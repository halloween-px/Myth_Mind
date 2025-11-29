import { baseApi } from '@/lib/api';
import {
	TLogin,
	TRegister,
	TResponceLogin,
	TResponceRegister,
	TUser,
} from './types';
import axios from 'axios';

export const register = async (data: TRegister): Promise<TResponceRegister> => {
	try {
		const res = await baseApi.post<TResponceRegister>('/register', data);
		const token = res.data.token;
		if (!token) throw new Error('Не удалось извлечь токен');

		await axios.post('/api/set-token', { token });

		return res.data;
	} catch (error) {
		throw new Error(`${(error as Error).message}`);
	}
};

export const login = async (data: TLogin): Promise<TUser> => {
	try {
		const res = await baseApi.post<TResponceLogin>('/login', data);
		const token = res.data.token;
		if (!token) throw new Error('Не удалось извлечь токен');

		await axios.post('/api/set-token', { token });

		return res.data.data;
	} catch (error) {
		throw new Error(`${(error as Error).message}`);
	}
};
