import type { WebData, Website } from '$lib/classes/websites';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ locals }) => {
	const WebData = await locals.db.getWebsiteList();
	const webList: WebData[] = [];
	WebData.forEach((website) => {
		webList.push(website.getDataAsObject());
	});
	return { webList };
};
