import { isUser, serializeUserOrAdminObj } from '$lib/helpers'
import type { RequestEvent } from '@sveltejs/kit'

export const load = (event: RequestEvent) => {
  const { locals } = event

  const obj = serializeUserOrAdminObj(locals.user)

  if (isUser(obj)) {
    return {
      profile: obj.profile
    }
  }
}
