import { Website } from '$lib/classes/websites';
import type { PageServerLoad, Actions } from './$types';
export const load: PageServerLoad = async ({ params, locals }) => {
	const websiteId = 'website:' + params.slug;
	const website = await locals.db.getWebsite(websiteId);
	return { website: website.getDataAsObject() };
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formdata = await request.formData();
		const name = String(formdata.get('name'));
		const id = String(formdata.get('id'));
		const imgUrl = String(formdata.get('image'));
		const publicUrl = String(formdata.get('publicUrl'));
		if (
			typeof name === 'string' &&
			typeof id === 'string' &&
			typeof publicUrl === 'string' &&
			typeof imgUrl === 'string'
		) {
			const newWebsite = new Website(publicUrl, '/' + id, name, imgUrl, 'website:' + id);
			const response = await locals.db.updateWebsite(newWebsite);
			if (response) {
				return true;
			} else {
				return false;
			}
		} else {
			throw new Error('Formdata was of wrong type');
		}
	}
};
