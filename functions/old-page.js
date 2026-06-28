export async function onRequest(){
  const host = '6a3c6df239b6dc45388acd9c--' + 'whimsical-choux-12f95f.netlify.app';
  const url = 'https://' + host + '/';
  const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 worldcup2026' } });
  const html = await res.text();
  return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}
