import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
export const books = sqliteTable("books", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  title: text("title").notNull(),
  format: text("format").notNull(),
  createdAt: integer("created_at").notNull(),
});
