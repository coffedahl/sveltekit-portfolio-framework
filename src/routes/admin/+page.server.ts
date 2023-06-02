import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
export const actions: Actions = {
	default: async ({ cookies, locals }) => {
		const sessionData = JSON.parse(String(cookies.get('session')));
		if (sessionData) {
			locals.db.deleteSesssionById(sessionData.sessionId);
		}
		cookies.delete('session');
		throw redirect(303, '/');
	}
};
