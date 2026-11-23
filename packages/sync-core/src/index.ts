export type SyncStatus = "queued" | "syncing" | "done" | "failed";
export interface SyncJob { id: string; status: SyncStatus; updatedAt: string }
export function newest<T extends { updatedAt: string }>(a: T, b: T): T {
  return a.updatedAt >= b.updatedAt ? a : b;
}
// TODO: durable queue, per-record versioning, conflict strategy, retries.
