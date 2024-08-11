import { NextResponse } from 'next/server.js';

export async function GET(request) {
	const text = request.nextUrl.searchParams.get('text');
	if (!text) {
		return NextResponse.json(
			{
				error: 'Missing text parameter',
			},
			{ status: 400 }
		);
	}
	// load the pipeline and cache it for future use.

	const result = {
		name: 'zackaria slimane',
		role: 'software developer',
	};

	return NextResponse.json(result);
}
