import { t } from 'elysia'

export namespace UserModel {
  export const registerBody = t.Object({
    username: t.String(),
    password: t.String().min(6)
  })

  export type registerBody = typeof registerBody.static

  export const loginBody = t.Object({
    username: t.String(),
    password: t.String().min(6)
  })

  export type loginBody = typeof loginBody.static

}
