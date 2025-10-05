import { Elysia, t } from 'elysia'
import { db } from '../../db.js'

const users = new Elysia({ prefix: '/users' })

users.get('/', () => 'Hello Elysia from users module')

users.get('/list', async () => {
  // return 'something'
  const users = await db`SELECT * FROM eatt.users`
  return { users }
})

// Register new user
users.post('/register', async ({ body }) => {
  const { username, email, name, password } = body
  // Hash password
  const hashedPassword = await Bun.password.hash(password)
  // Store in db
  await db`INSERT INTO eatt.users (username, email, name, password) VALUES (${username}, ${email}, ${name}, ${hashedPassword})`
  return { success: true, message: 'User registered successfully' }
}, {
  body: t.Object({
    username: t.String(),
    email: t.String(),
    name: t.String(),
    password: t.String()
  })
})

// Login user
users.post('/login', async ({ body }) => {
  const { username, password } = body
  // Fetch user from db
  const user = await db`SELECT * FROM eatt.users WHERE username = ${username}`.then(res => res[0])
  if (!user) {
    return { success: false, message: 'User not found' }
  }
  // Compare password
  const isValid = await Bun.password.verify(user.password, password)
  if (!isValid) {
    return { success: false, message: 'Invalid password' }
  }
  // Generate token
  return { success: true, message: 'User logged in successfully' }
}, {
  body: t.Object({
    username: t.String(),
    password: t.String()
  })
})

export { users }
