import { routesConfig } from '@/config/routes';
import { getUser } from '@/services/users';
import { redirect } from 'next/navigation';

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
	const user = await getUser();

	if (user) {
		redirect(routesConfig.main);
	}

	return <>{children}</>;
};

export default AuthLayout;
