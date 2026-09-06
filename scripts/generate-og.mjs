import fs from 'node:fs';
import sharp from 'sharp';

const W = 1200, H = 630;
const PAPER = '#FBFAF7', INK = '#14171C', INK2 = '#3D4451', INK3 = '#6A7182';
const ACCENT = '#0B5C63', LINE = '#E7E3DA';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// A restrained data motif: a distribution of bars, echoing the waiting-list work.
const bars = [20, 34, 52, 73, 99, 120, 105, 79, 56, 38, 26, 17];
const BASE = 440; // bars sit on the rule that separates the facts line
const motif = bars
  .map((h, i) => {
    const x = 820 + i * 26;
    const o = (0.18 + (h / 120) * 0.58).toFixed(2);
    return `<rect x="${x}" y="${BASE - h}" width="14" height="${h}" rx="1.5" fill="${ACCENT}" opacity="${o}"/>`;
  })
  .join('');

function svg({ eyebrow, name, role, facts }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${PAPER}"/>
  <rect x="0" y="0" width="${W}" height="8" fill="${ACCENT}"/>
  ${motif}
  <text x="80" y="128" font-family="JetBrains Mono" font-weight="500" font-size="19" letter-spacing="2.6" fill="${ACCENT}">${esc(eyebrow)}</text>
  <text x="80" y="248" font-family="Source Serif 4" font-weight="600" font-size="82" letter-spacing="-1.6" fill="${INK}">${esc(name)}</text>
  <text x="80" y="330" font-family="Inter" font-weight="400" font-size="33" fill="${INK2}">${esc(role[0])}</text>
  <text x="80" y="378" font-family="Inter" font-weight="400" font-size="33" fill="${INK2}">${esc(role[1])}</text>
  <line x1="80" y1="470" x2="${W - 80}" y2="470" stroke="${LINE}" stroke-width="1.5"/>
  <text x="80" y="524" font-family="JetBrains Mono" font-weight="500" font-size="21" letter-spacing="0.6" fill="${INK3}">${esc(facts)}</text>
  <text x="80" y="566" font-family="Inter" font-weight="600" font-size="21" fill="${ACCENT}">paulovillarroel.github.io</text>
</svg>`;
}

const variants = {
  'og-es': {
    eyebrow: 'MINISTERIO DE SALUD DE CHILE',
    name: 'Paulo Villarroel Tapia',
    role: ['Arquitecto de soluciones de datos', 'para sistemas públicos de salud.'],
    facts: 'Listas de espera  ·  Detección oncológica  ·  Interoperabilidad',
  },
  'og-en': {
    eyebrow: 'CHILEAN MINISTRY OF HEALTH',
    name: 'Paulo Villarroel Tapia',
    role: ['Data solutions architect', 'for public health systems.'],
    facts: 'Waiting lists  ·  Cancer detection  ·  Health interoperability',
  },
};

for (const [file, v] of Object.entries(variants)) {
  const markup = svg(v);
  fs.writeFileSync(`${file}.svg`, markup);
  await sharp(Buffer.from(markup), { density: 144 })
    .resize(W, H, { fit: 'fill' })
    .png({ quality: 92, compressionLevel: 9 })
    .toFile(`${file}.png`);
  console.log(file, fs.statSync(`${file}.png`).size, 'bytes');
}
