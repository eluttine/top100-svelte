import { redirect, type RequestEvent } from "@sveltejs/kit";

export const load = (event: RequestEvent) => {
  if(event.locals.pb.authStore.isValid) {
    throw redirect(303, '/')
  }
}

export const actions = {
  register: async (event: RequestEvent) => {
    const { request, locals } = event

    const formData = await request.formData()
    const data = Object.fromEntries([...formData])

    try {
      await locals.pb.users.create(data)

      if (!data.email || !data.password) throw new Error('Missing data!')

      const { user } = await locals.pb.users.authViaEmail( data.email.toString(), data.password.toString())

      if (!user.profile) throw new Error('Missing user profile!')

      await locals.pb.records.update(
        'profiles',
        user.profile.id, { name: data.name }
      )

      locals.pb.authStore.clear()
    } catch (err) {
      console.log('Error:', err)

      return {
        error: true,
        message: err
      }
    }

    throw redirect(303, '/login')
  }
}
