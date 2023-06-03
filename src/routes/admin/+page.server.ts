import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
export const actions: Actions = {
	default: async ({ cookies, locals }) => {
		const sessionData = JSON.parse(String(cookies.get('session')));
		if (sessionData) {
			if (!(await locals.db.deleteSessionById(sessionData.sessionId))) {
				throw Error('Unable to delete session');
			}
		}
		cookies.delete('session');
		throw redirect(303, '/');
	}
};
