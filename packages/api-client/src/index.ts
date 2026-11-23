export async function apiGet<T>(baseUrl: string, endpoint: string): Promise<T> {
  const res = await fetch(new URL(endpoint, baseUrl));
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json() as Promise<T>;
}
