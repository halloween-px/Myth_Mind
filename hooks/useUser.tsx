'use client';

import { TUser } from '@/services/types';
import React, { useContext, useState } from 'react';

export const UserLayoutContext = React.createContext<{
	user: TUser | null;
	setUser: React.Dispatch<React.SetStateAction<TUser | null>>;
} | null>(null);
export const UserProvider = ({
	children,
	initialUser,
}: {
	children: React.ReactNode;
	initialUser: TUser | null;
}) => {
	const [user, setUser] = useState<TUser | null>(initialUser);

	return (
		<UserLayoutContext.Provider value={{ user, setUser }}>
			{children}
		</UserLayoutContext.Provider>
	);
};

export const useUserContext = () => {
	const context = useContext(UserLayoutContext);

	if (!context) {
		throw new Error('useUserContext must be used within a UserProvider');
	}

	return context;
};
