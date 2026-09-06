import type { APIRoute } from 'astro';
import { buildLlmsIndex } from '@/lib/llms';

export const GET: APIRoute = ({ site }) =>
  new Response(buildLlmsIndex(site), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
