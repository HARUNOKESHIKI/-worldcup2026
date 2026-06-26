export default async function handler(){
  const res = await fetch('https://6a3c6df239b6dc45388acd9c--whimsical-choux-12f95f.netlify.app/');
  const html = await res.text();
  return new Response(html, {headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store'}});
}
export const config = { path: '/old-page' };
