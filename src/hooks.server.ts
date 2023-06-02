// Imports
import { redirect, type Handle } from '@sveltejs/kit';
import { Database } from './lib/db';
import type { SessionData } from '$lib/types/types';
// Create mock databse
const db = new Database('http://localhost:8000/rpc');
db.initDb('root', 'root', 'test', 'test');
// Code running every server request
export const handle = (async ({ event, resolve }) => {
	// Link mock db
	event.locals.db = db;
	// If user tries to acces admin path
	if (event.url.pathname.startsWith('/admin')) {
		// Get session
		const session: SessionData = JSON.parse(String(event.cookies.get('session')));
		// Check if session is not there
		if (!session) {
			// Redirect to login
			throw redirect(303, '/login');
		} else {
			// Get session from database
			const dbSession = await event.locals.db.getSessionBySessionId(session.sessionId);
			// Check if dbsession is expired
			if (dbSession.expires < new Date()) {
				// Delete session and redirect to login
				event.locals.db.deleteSesssionById(session.sessionId);
				event.cookies.delete('session');
				throw redirect(303, '/login');
			}
		}
	}
	// Resolve event
	const response = await resolve(event);
	return response;
}) satisfies Handle;
