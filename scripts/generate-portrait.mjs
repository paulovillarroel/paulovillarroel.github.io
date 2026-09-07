import fs from 'node:fs';
import sharp from 'sharp';

/**
 * Produces the responsive portrait set served from public/.
 * The image is pre-optimised here rather than through `astro:assets` so the
 * project keeps no build-time image dependency for a single photo.
 *
 * Usage: node scripts/generate-portrait.mjs <source.jpg>
 */
const SOURCE = process.argv[2] ?? 'portrait-source.jpg';
const OUT = 'public';
const WIDTHS = [360, 720];

const base = sharp(SOURCE).rotate();
const { width, height } = await base.metadata();
console.log(`origen: ${width}x${height}`);

for (const w of WIDTHS) {
  const pipeline = () => sharp(SOURCE).rotate().resize(w, w, { fit: 'cover', position: 'top' });
  await pipeline().avif({ quality: 62, effort: 6 }).toFile(`${OUT}/paulo-${w}.avif`);
  await pipeline().webp({ quality: 78, effort: 6 }).toFile(`${OUT}/paulo-${w}.webp`);
  await pipeline().jpeg({ quality: 82, mozjpeg: true }).toFile(`${OUT}/paulo-${w}.jpg`);
}

for (const f of fs.readdirSync(OUT).filter((f) => f.startsWith('paulo-')).sort()) {
  console.log(`  ${f.padEnd(20)} ${(fs.statSync(`${OUT}/${f}`).size / 1024).toFixed(1)} KB`);
}
