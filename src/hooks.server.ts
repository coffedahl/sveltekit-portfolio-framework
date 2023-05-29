// Imports
import { redirect, type Handle } from '@sveltejs/kit';
import { Database } from './lib/db'
import { validateSession, parseSession } from '$lib/session';
// Create mock databse
const db = new Database()

// Code running every server request
export const handle = (async ({ event, resolve }) => {
	// Link mock db
	event.locals.db = db
	// If user tries to acces admin path
	if (event.url.pathname.startsWith('/admin')) {
		// Get session
		const session = event.cookies.get('session')
		// Check if session is not there
		if (!session) {
			// Redirect to login
			throw redirect(303, '/login')

		} else
			// If not validated session
			if (!validateSession(parseSession(JSON.parse(String(session))))) {
				// Delete cookie and redirect
				event.cookies.delete('session')
				throw redirect(303, '/login')
			}
	}
	// Resolve event
	const response = await resolve(event);
	return response;
}) satisfies Handle;
