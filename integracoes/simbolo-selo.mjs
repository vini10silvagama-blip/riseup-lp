// Integração do Astro: garante a imagem do símbolo da marca (círculo ciano com o dente) usada no
// centro do selo circular do hero. Se existir src/assets/selo/simbolo-riseup.png, ela é usada e nada
// é gerado. Se não existir, o símbolo é recortado da logo do cabeçalho (public/img/logo-riseup.png)
// e salvo em src/assets/selo-gerado/simbolo-riseup.png (pasta gerada, fora do Git).
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ARQUIVO_PROPRIO = 'src/assets/selo/simbolo-riseup.png';
const LOGO = 'public/img/logo-riseup.png';
const DESTINO = 'src/assets/selo-gerado/simbolo-riseup.png';

// Pixel de fundo: transparente ou quase branco
const ehFundo = (r, g, b, a) => a < 10 || (r > 245 && g > 245 && b > 245);

async function recortarSimbolo(raiz) {
  const destino = path.join(raiz, DESTINO);
  const existe = async (p) => !!(await fs.stat(p).catch(() => null));
  if (await existe(path.join(raiz, ARQUIVO_PROPRIO))) {
    await fs.rm(destino, { force: true });
    return 'usando src/assets/selo/simbolo-riseup.png';
  }
  const logo = path.join(raiz, LOGO);
  const [infoLogo, infoDestino] = await Promise.all([fs.stat(logo), fs.stat(destino).catch(() => null)]);
  if (infoDestino && infoDestino.mtimeMs >= infoLogo.mtimeMs) return 'símbolo já recortado da logo';

  const { data, info } = await sharp(logo).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const pixel = (x, y) => data.subarray((y * width + x) * 4, (y * width + x) * 4 + 4);
  // O símbolo é o primeiro bloco de colunas com desenho, da esquerda para a direita
  const colunaTemDesenho = (x) => {
    for (let y = 0; y < height; y++) if (!ehFundo(...pixel(x, y))) return true;
    return false;
  };
  let inicio = 0;
  while (inicio < width && !colunaTemDesenho(inicio)) inicio++;
  let fim = inicio;
  while (fim < width && colunaTemDesenho(fim)) fim++;
  let topo = height, base = 0;
  for (let y = 0; y < height; y++) {
    for (let x = inicio; x < fim; x++) {
      if (!ehFundo(...pixel(x, y))) {
        topo = Math.min(topo, y);
        base = Math.max(base, y);
        break;
      }
    }
  }
  const lado = Math.max(fim - inicio, base - topo + 1);
  // Recorte quadrado com máscara circular (sem cantos)
  const mascara = Buffer.from(`<svg width="${lado}" height="${lado}"><circle cx="${lado / 2}" cy="${lado / 2}" r="${lado / 2}"/></svg>`);
  await fs.mkdir(path.dirname(destino), { recursive: true });
  await sharp(logo)
    .extract({ left: inicio, top: topo, width: Math.min(lado, width - inicio), height: Math.min(lado, height - topo) })
    .resize(lado, lado, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .composite([{ input: mascara, blend: 'dest-in' }])
    .png()
    .toFile(destino);
  return `símbolo recortado da logo (${lado}×${lado}px)`;
}

export default function simboloSelo() {
  return {
    name: 'simbolo-selo',
    hooks: {
      'astro:config:setup': async ({ config, logger }) => {
        logger.info(await recortarSimbolo(fileURLToPath(config.root)));
      },
    },
  };
}
