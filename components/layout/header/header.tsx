import { ShirtIcon } from 'lucide-react';
import Link from 'next/link';
import {
	NavigationMenu,
	NavigationMenuLink,
	NavigationMenuList,
} from '../../ui/navigation-menu';
import { Button } from '../../ui/button';
import { Container } from '../container';
import { navigationConfig } from '@/config/navigation';
import { MobileMenu } from './mobile-menu';

export const Header = () => {
	return (
		<header>
			<Container>
				<div className='flex h-20 w-full shrink-0 items-center'>
					<MobileMenu navigation={navigationConfig} />
					<Link href='#' className='mr-6 hidden lg:flex' prefetch={false}>
						<ShirtIcon className='h-6 w-6' />
						<span className='sr-only'>ShadCN</span>
					</Link>
					<NavigationMenu className='hidden lg:flex'>
						<NavigationMenuList>
							{navigationConfig.map((nav) => {
								return (
									<NavigationMenuLink asChild key={nav.label}>
										<Link
											href={nav.href}
											className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
											prefetch={false}>
											{nav.label}
										</Link>
									</NavigationMenuLink>
								);
							})}
						</NavigationMenuList>
					</NavigationMenu>
					<div className='ml-auto flex gap-2'>
						<Button variant='outline'>Sign in</Button>
						<Button>Sign Up</Button>
					</div>
				</div>
			</Container>
		</header>
	);
};
