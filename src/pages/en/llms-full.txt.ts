import type { APIRoute } from 'astro';
import { buildLlmsFull } from '@/lib/llms';

export const GET: APIRoute = ({ site }) =>
  new Response(buildLlmsFull('en', site), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
