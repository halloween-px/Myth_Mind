import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	const { token } = await req.json();

	if (!token) {
		return NextResponse.json(
			{ success: false, message: 'Нет токена' },
			{ status: 400 }
		);
	}

	(await cookies()).set('token', token, {
		httpOnly: true,
		secure: true,
		path: '/',
		sameSite: 'lax',
	});

	return NextResponse.json({ success: true });
}
