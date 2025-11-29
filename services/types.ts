export type TRegister = {
	name: string;
	password: string;
	email: string;
	password_confirmation: string;
};

export type TLogin = {
	email: string;
	password: string;
};

export type TResponceRegister = {
	data: TUser;
	status: 'success' | 'failed';
	token: string;
};

export type TResponceLogin = {
	data: TUser;
	status: 'success' | 'failed';
	token: string;
};

export type TUser = {
	data: TUser;
	id: number;
	name: string;
	email: string;
	avatars: {
		id: number;
		name: string;
		url: string;
	};
};

export type TUserResponse = {
	status: boolean;
	data: TUser;
};
