export function clampProgress(value: number): number {
  return Math.max(0, Math.min(1, value));
}
export function pdfPageProgress(page: number, totalPages: number): number {
  if (totalPages <= 0) return 0;
  return clampProgress(page / totalPages);
}
