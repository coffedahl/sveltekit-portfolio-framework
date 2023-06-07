import type { WebData } from '$lib/classes/websites';
import type { LayoutServerLoad } from './$types';
export const load: LayoutServerLoad = async ({ locals }) => {
	// Get list of websites
	const weblist = await locals.db.getWebsiteList();
	// Parse the website list
	const webdata: Array<WebData> = [];
	weblist.forEach((website) => {
		webdata.push(website.getDataAsObject());
	});
	locals.webData = webdata;
};
