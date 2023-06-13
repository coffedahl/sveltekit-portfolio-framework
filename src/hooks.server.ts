// Imports
import { DATABASE_URL } from '$env/static/private'
import { redirect, type Handle } from '@sveltejs/kit';
import { Database } from './lib/db';
import type { SessionData } from '$lib/types/types';
// Create mock databse
console.log('db url: ' + DATABASE_URL)
const db = new Database(DATABASE_URL);
db.initDb('root', 'root', 'test', 'test');
// Code running every server request
export const handle = (async ({ event, resolve }) => {
	// Link mock db
	event.locals.db = db;
	// If user tries to acces admin path
	if (event.url.pathname.startsWith('/admin')) {
		// Get session
		const sessionCookie = event.cookies.get('session');
		// Check if session is not there
		if (!sessionCookie) {
			// Redirect to login
			throw redirect(303, '/login');
		} else {
			const sessionData: SessionData = JSON.parse(sessionCookie);
			// Get session from database
			const dbSession = await event.locals.db.getSessionBySessionId(sessionData.sessionId);
			// Check if dbsession is expired
			if (dbSession.expires < new Date()) {
				// Delete session and redirect to login
				event.locals.db.deleteSesssionById(sessionData.sessionId);
				event.cookies.delete('session');
				throw redirect(303, '/login');
			}
		}
	}
	// Resolve event
	const response = await resolve(event);
	return response;
}) satisfies Handle;
