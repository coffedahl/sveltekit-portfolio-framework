import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
    const session = cookies.get('session')
    if (session)
        return { isAdmin: true };
    else
        return { isAdmin: false }
}) satisfies LayoutServerLoad;