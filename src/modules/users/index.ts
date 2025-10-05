import { Elysia } from 'elysia'

const users = new Elysia({ prefix: '/users' })

users.get('/', () => 'Hello Elysia from users module')

export { users }