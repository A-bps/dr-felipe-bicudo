import type { APIRoute } from 'astro';
import { site } from '../content';

export const GET: APIRoute = () => {
  const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true' && !import.meta.env.DEV;
  const body = indexable
    ? 'User-agent: *\nDisallow:\nSitemap: ' + site + '/sitemap_index.xml\n'
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};