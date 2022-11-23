import { redirect, type RequestEvent } from "@sveltejs/kit";

export const POST = (event: RequestEvent) => {
  event.locals.pb.authStore.clear()
  event.locals.user = null

  throw redirect(303, '/login')
}
