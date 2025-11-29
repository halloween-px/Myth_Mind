import { Header } from './header/header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default MainLayout;
