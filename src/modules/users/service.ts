import { status } from 'elysia'

import type { UserModel } from './model.js'

export class UserService {
  async registerUser(data: UserModel.registerBody) {
    const result = { success: true, message: 'User registered successfully' }
    return result
  }

  async loginUser(data: UserModel.loginBody) {
    // validation
    const schema = {
      email: 'string',
      password: 'string'
    }

    // const parsed = schema.parse(data)
    // if (!parsed) {
    //   return { success: false, message: 'Invalid data' }
    // }

    // check if user exists in db
    // compare password
    const result = { success: true, message: 'User logged in successfully' }
    return result
  }
}
