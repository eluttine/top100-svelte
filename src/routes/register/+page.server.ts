import { redirect, type RequestEvent } from "@sveltejs/kit";

export const actions = {
  register: async (event: RequestEvent) => {
    const { request, locals } = event

    const formData = await request.formData()
    const data = Object.fromEntries([...formData])

    try {
      const newUser = await locals.pb.users.create(data)

      if (!data.email || !data.password) throw new Error('Missing data!')

      const { token, user } = await locals.pb.users.authViaEmail( data.email.toString(), data.password.toString())

      if (!user.profile) throw new Error('Missing user profile!')

      const updatedProfile = await locals.pb.records.update(
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
