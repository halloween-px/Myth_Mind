export type TNavigation = {
	label: string;
	href: string;
};

export const navigationConfig: TNavigation[] = [
	{
		label: 'Главная',
		href: '/',
	},
	{
		label: 'Персонажи',
		href: '/heroes',
	},
	{
		label: 'Игры',
		href: '/games',
	},
];
