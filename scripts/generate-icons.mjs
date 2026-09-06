import fs from 'node:fs';
import sharp from 'sharp';

const ACCENT = '#0B5C63', PAPER = '#FBFAF7';

/**
 * Font-free mark: the same distribution motif as the Open Graph card, so the
 * tab icon and the shared card read as one identity. Geometry only, which
 * keeps it crisp at 16px and identical across platforms.
 *
 * Five bars, width 5 with 2.5 gaps => 35 wide, centred in a 64 box.
 * Bars sit on a baseline at y=46, tallest is 29, so the group is optically
 * centred vertically too.
 */
function mark({ bg, fg, radius }) {
  const heights = [12, 20, 29, 21, 13];
  const BASE = 46;
  const rects = heights
    .map((h, i) => {
      const x = 14.5 + i * 7.5;
      const o = (0.6 + (h / 29) * 0.4).toFixed(2);
      return `<rect x="${x}" y="${BASE - h}" width="5" height="${h}" rx="1.6" fill="${fg}" opacity="${o}"/>`;
    })
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="${radius}" fill="${bg}"/>
  ${rects}
</svg>`;
}

const svg = mark({ bg: ACCENT, fg: PAPER, radius: 13 });
fs.writeFileSync('favicon.svg', svg);

for (const size of [32, 180, 512]) {
  const name = size === 180 ? 'apple-touch-icon.png' : `icon-${size}.png`;
  // Apple ignores transparency and rounds the corners itself, so it gets a full-bleed square.
  const src = size === 180 ? mark({ bg: ACCENT, fg: PAPER, radius: 0 }) : svg;
  await sharp(Buffer.from(src), { density: 384 }).resize(size, size).png({ compressionLevel: 9 }).toFile(name);
  console.log(name, fs.statSync(name).size, 'bytes');
}
