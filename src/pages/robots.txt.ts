import type { APIRoute } from 'astro';
import { SITE } from '@/data/site';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL(SITE.url);
  const abs = (path: string) => new URL(path, base).href;

  const body = `User-agent: *
Allow: /

# Machine-readable index for LLM agents (llmstxt.org)
# ${abs('/llms.txt')}
# ${abs('/llms-full.txt')}
# ${abs('/en/llms-full.txt')}

Sitemap: ${abs('/sitemap-index.xml')}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
