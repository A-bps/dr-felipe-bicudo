import type { APIRoute } from 'astro';
import { site } from '../content';
import { blogPath, blogPosts } from '../blog';
import { procedurePages } from '../procedures';

export const GET: APIRoute = () => {
  const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true' && !import.meta.env.DEV;
  const paths = indexable ? ['/', '/procedimentos/', '/blog/', ...procedurePages.map(({path}) => path), ...blogPosts.map(({slug}) => blogPath(slug))] : [];
  const entries = paths.map(path => '<url><loc>' + new URL(path, site).href + '</loc></url>').join('');
  const body = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + entries + '</urlset>';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};