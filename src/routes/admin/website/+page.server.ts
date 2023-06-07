import type { WebData } from '$lib/classes/websites';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// Get the featured website
	const featured = await locals.db.getFeaturedWebsite();
	// Get list of websites
	const weblist = await locals.db.getWebsiteList();
	// Parse the website list
	const webdata: Array<WebData> = [];
	weblist.forEach((website) => {
		webdata.push(website.getDataAsObject());
	});
	// Return data
	return { webdata, featured: featured.getDataAsObject() };
};

export const actions: Actions = {
	/**
	 * Function that handles the update of what project is featrured
	 */
	feature: async ({ request, locals }) => {
		// Get data from form
		const formData = await request.formData();
		const featuredWebsite = formData.get('feature');
		// Update the featured website
		if (featuredWebsite) {
			await locals.db.updateFeaturedWebsite(String(featuredWebsite));
		}
	},
	/**
	 * Function that handles deletion of a project
	 */
	remove: async ({ request, locals }) => {
		// Get formdata
		const formData = await request.formData();
		const id = formData.get('id');
		if (id) {
			const response = await locals.db.deleteWebsite(String(id));
		}
	}
};
