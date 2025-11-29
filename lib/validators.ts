export interface ValidatorType {
	[key: string]: (value: string) => string | null;
}

const checkNotEmpty = (field: string) => {
	return (value: string) =>
		value.trim() !== '' ? null : `${field} не должно быть пустым.`;
};

const сheckName = (value: string) => {
	const regex = /^[A-ZА-Я][a-zа-я-]+$/;
	return regex.test(value)
		? null
		: 'Имя должно быть на латинице или кириллице, первая буква заглавная, без пробелов и цифр, допустим только дефис.';
};

const checkPassword = (value: string) => {
	const regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/;

	return regex.test(value)
		? null
		: 'Пароль должен быть от 8 до 40 символов, содержать хотя бы одну заглавную букву и цифру.';
};

export const Validators: ValidatorType = {
	first_name: сheckName,
	display_name: сheckName,
	password: checkPassword,

	message: checkNotEmpty('Сообщение'),
	text: checkNotEmpty('Сообщение'),
	login: (value) => {
		const regex = /^(?=.*[a-zA-Z])([a-zA-Z0-9_-]{3,20})$/;
		return regex.test(value)
			? null
			: 'Логин должен быть от 3 до 20 символов, без пробелов и спецсимволов (кроме "-" и "_"), не состоять только из цифр.';
	},
	email: (value) => {
		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
		return regex.test(value) ? null : 'Введите корректный email.';
	},
	phone: (value) => {
		const regex = /^\+?\d{10,15}$/;
		return regex.test(value)
			? null
			: 'Телефон должен быть от 10 до 15 цифр, может начинаться с "+".';
	},
	file: (value) => {
		const format = value.split('.');
		return ['jpg', 'png', 'jpeg', 'wepb'].includes(format[format.length - 1])
			? null
			: 'Формат должен быть jpg | png | jpeg | wepb';
	},
};
