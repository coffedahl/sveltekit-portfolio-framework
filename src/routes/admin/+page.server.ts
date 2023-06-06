import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import type { WebData } from '$lib/classes/websites';

export const load: PageServerLoad = async ({ locals }) => {
	const webData = await locals.db.getWebsiteList();
	const webList: WebData[] = [];
	webData.forEach((website) => {
		webList.push(website.getDataAsObject());
	});
	return { webList };
};

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
