import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ locals }) => {
	const featuredWebsite = await locals.db.getFeaturedWebsite();
	return { featuredWebsite: featuredWebsite.getDataAsObject() };
};
