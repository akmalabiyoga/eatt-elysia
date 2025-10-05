import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { users } from "./modules/users/index.js";

const app = new Elysia().use(cors()).listen(3000);
app.get('/', () => 'Hello Elysia from main app');
app.use(users);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
