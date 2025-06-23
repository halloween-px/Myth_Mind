import { cn } from '@/lib/utils';

type TContainer = {
	className?: string;
	children: React.ReactNode;
};

export const Container = ({ className, children }: TContainer) => {
	return (
		<div className={cn('max-w-[1200px] w-full m-auto px-4 md:px-6', className)}>
			{children}
		</div>
	);
};
