import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// Get the featured website
	const featured = await locals.db.getFeaturedWebsite();
	// Return data
	return { webdata: locals.webData, featured: featured.getDataAsObject() };
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
	delete: async ({ request, locals }) => {
		// Get formdata
		const formData = await request.formData();
		const id = formData.get('id');
		// Delete project
		if (id) {
			await locals.db.deleteWebsite(String(id));
		}
	}
};
