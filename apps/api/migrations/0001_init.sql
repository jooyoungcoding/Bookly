CREATE TABLE IF NOT EXISTS books (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  title TEXT NOT NULL,
  format TEXT NOT NULL CHECK (format IN ('pdf', 'epub')),
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS reading_progress (
  user_id TEXT NOT NULL,
  book_id TEXT NOT NULL,
  page INTEGER NOT NULL DEFAULT 1,
  progress REAL NOT NULL DEFAULT 0,
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (user_id, book_id)
);
CREATE TABLE IF NOT EXISTS annotations (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  book_id TEXT NOT NULL,
  kind TEXT NOT NULL CHECK (kind IN ('bookmark', 'highlight')),
  locator TEXT NOT NULL,
  text_content TEXT,
  created_at INTEGER NOT NULL
);
