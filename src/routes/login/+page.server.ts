import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ cookies, locals, request }) => {
		// Get formdata
		const formData = await request.formData();
		const username = formData.get('username');
		const password = formData.get('password');
		// Get user
		const user = await locals.db.getUserByUsername(String(username));
		//Check user password combo
		if (user && user.password == password) {
			// Create new session and store it in cookies
			const session = await locals.db.createSession(user.username);
			cookies.set('session', JSON.stringify({ sessionId: session.sessionId }));
			throw redirect(303, '/admin');
		} else {
			throw Error('No valid login');
		}
	}
};
