import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    default: async ({ cookies, locals, request }) => {
        const formData = await request.formData()
        const username = formData.get('username')
        const password = formData.get('password')
        //Check user password combo
        const user = locals.db.getUserByUsername(username)
        if (user && user.password == password) {
            const session = locals.db.createSession(user.username)
            cookies.set('session', JSON.stringify(session))
            throw redirect(303, '/admin')
        } else {
            throw console.error('No valid login')
        }
    }
};