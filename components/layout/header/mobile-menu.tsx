import { MenuIcon, ShirtIcon } from 'lucide-react';
import { Button } from '../../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet';
import { TNavigation } from '@/config/navigation';
import Link from 'next/link';

type TMobileMenu = {
	navigation: TNavigation[];
};

export const MobileMenu = ({ navigation }: TMobileMenu) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='outline' size='icon' className='lg:hidden'>
					<MenuIcon className='h-6 w-6' />
					<span className='sr-only'>Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side='left'>
				<Link href='#' prefetch={false}>
					<ShirtIcon className='h-6 w-6' />
					<span className='sr-only'>ShadCN</span>
				</Link>
				<div className='grid gap-2 py-6'>
					{navigation.map((nav) => (
						<Link
							key={nav.label}
							href={nav.href}
							className='flex w-full items-center py-2 text-lg font-semibold'
							prefetch={false}>
							{nav.label}
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};
