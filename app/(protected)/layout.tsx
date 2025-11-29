import { routesConfig } from '@/config/routes';
import { getUser } from '@/services/users';
import { redirect } from 'next/navigation';

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
	const user = await getUser();

	if (!user) {
		redirect(routesConfig.login);
	}

	return <>{children}</>;
};

export default ProtectedLayout;
