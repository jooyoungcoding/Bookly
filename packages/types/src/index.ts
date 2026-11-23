export interface Book {
  id: string;
  title: string;
  format: "pdf" | "epub";
  coverUrl?: string;
  sourcePath?: string;
}
export interface ReadingPosition {
  bookId: string;
  page: number;
  progress: number;
  updatedAt: string;
}
