import { Hono } from "hono";
import { cors } from "hono/cors";

type Bindings = {
  DB: D1Database;
  BOOKS_BUCKET: R2Bucket;
};
const app = new Hono<{ Bindings: Bindings }>();
app.use("/api/*", cors()); // Tighten allowed origins before deployment.
app.get("/", (c) => c.json({ name: "Bookly API", status: "ok" }));
app.get("/api/health", (c) => c.json({ ok: true }));
app.get("/api/books", async (c) => {
  const { results } = await c.env.DB.prepare("SELECT id, title, format FROM books LIMIT 100").all();
  return c.json({ books: results });
});
export default app;
