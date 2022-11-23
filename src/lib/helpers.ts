import type { Admin, User } from 'pocketbase'

export const serializeUserOrAdminObj = (obj: any): User | Admin | null => {
  if (isUser(obj)) return JSON.parse(JSON.stringify(obj)) as User
  if (isAdmin(obj)) return JSON.parse(JSON.stringify(obj)) as Admin

  return null
}

export function isUser(maybeUser: User | Admin | null): maybeUser is User {
  if ((maybeUser as User)?.profile) return true
  return false
}

export function isAdmin(userOrAdmin: User | Admin | null): userOrAdmin is Admin {
  if ((userOrAdmin as Admin)?.avatar) return true
  return false
}
