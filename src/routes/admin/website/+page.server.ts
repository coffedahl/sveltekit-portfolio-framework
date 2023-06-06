import type { WebData } from '$lib/classes/websites';
import type { PageServerLoad, Actions } from './$types';
export const load: PageServerLoad = async ({ locals }) => {
	const weblist = await locals.db.getWebsiteList();
	const featured = await locals.db.getFeaturedWebsite();
	const webdata: Array<WebData> = [];
	weblist.forEach((website) => {
		webdata.push(website.getDataAsObject());
	});
	return { webdata, featured: featured.getDataAsObject() };
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		console.log('Button press');
		const formdata = await request.formData();
		const featuredWebsite = formdata.get('feature');
		if (featuredWebsite) {
			await locals.db.updateFeaturedWebsite(String(featuredWebsite));
		}
	}
};
