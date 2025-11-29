import { routesConfig } from './routes';

export type TNavigation = {
	label: string;
	href: string;
};

export const navigationConfig: TNavigation[] = [
	{
		label: 'Главная',
		href: routesConfig.main,
	},
	{
		label: 'Персонажи',
		href: routesConfig.heroes,
	},
	{
		label: 'Игры',
		href: routesConfig.games,
	},
];
