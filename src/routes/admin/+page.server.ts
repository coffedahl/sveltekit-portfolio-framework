import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import type { WebData } from '$lib/classes/websites';

export const load: PageServerLoad = async ({ locals }) => {
	// Return data
	// Get list of websites
	const weblist = await locals.db.getWebsiteList();
	// Parse the website list
	const webdata: Array<WebData> = [];
	weblist.forEach((website) => {
		webdata.push(website.getDataAsObject());
	});
	return { webdata };
};

export const actions: Actions = {
	/**
	 * Function for handling logout
	 */
	default: async ({ cookies, locals }) => {
		// Get session from cookie
		const sessionData = JSON.parse(String(cookies.get('session')));
		if (sessionData) {
			// Delete the session from the database
			if (!(await locals.db.deleteSessionById(sessionData.sessionId))) {
				throw Error('Unable to delete session');
			}
		}
		// Delete cookie and redirect
		cookies.delete('session');
		throw redirect(303, '/');
	}
};
