export async function GET() {
  try {
    const res = await fetch('https://www.bytefuse.cn/clonerweb.json', { cache: 'no-store' });
    if (!res.ok) return new Response('Upstream error', { status: 502 });
    const data = await res.json();
    return Response.json(data, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return new Response('Fetch failed', { status: 500 });
  }
}
