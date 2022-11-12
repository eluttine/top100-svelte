import { redirect, type RequestEvent } from '@sveltejs/kit';

export const actions = {
  login: async (event: RequestEvent) => {
    const { request, locals } = event;

    const formData = await request.formData();
    const data = Object.fromEntries([...formData]);

    try {
      if (!data.email || !data.password) throw new Error('Missing data!');

      const { token, user } = await locals.pb.users.authViaEmail(
        data.email.toString(),
        data.password.toString()
      );
    } catch (err) {
      console.log('Error:', err);

      return {
        error: true,
        message: err
      }
    }

    throw redirect(303, '/')
  }
};
