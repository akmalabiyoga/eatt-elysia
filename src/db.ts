import { SQL, sql } from 'bun'
// read from env
const sqlurl = process.env.POSTGRES_URL
if (!sqlurl) throw new Error('POSTGRES_URL is not set in env')
export const db = new SQL(sqlurl)
