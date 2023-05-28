import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/admin')) {
        
	}

	const response = await resolve(event);
	return response;
}) satisfies Handle;
