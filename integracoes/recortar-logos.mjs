// Integração do Astro: antes do build (e ao iniciar o modo de desenvolvimento), recorta a margem
// branca ou transparente de cada logo de src/assets/clientes/ e salva o resultado em
// src/assets/clientes-recortados/ (pasta gerada, fora do Git). Os arquivos originais não mudam.
// O Hero lê a pasta recortada. Logo novo durante o "npm run dev": reinicie para recortar.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ORIGEM = 'src/assets/clientes';
const DESTINO = 'src/assets/clientes-recortados';

async function recortar(raiz) {
  const origem = path.join(raiz, ORIGEM);
  const destino = path.join(raiz, DESTINO);
  await fs.mkdir(destino, { recursive: true });
  const arquivos = (await fs.readdir(origem).catch(() => [])).filter((a) => /\.(png|svg)$/i.test(a));

  // Apaga recortes de logos que saíram da pasta original
  for (const arquivo of await fs.readdir(destino)) {
    if (!arquivos.includes(arquivo)) await fs.rm(path.join(destino, arquivo));
  }

  let recortados = 0;
  for (const arquivo of arquivos) {
    const de = path.join(origem, arquivo);
    const para = path.join(destino, arquivo);
    const [original, recorte] = await Promise.all([fs.stat(de), fs.stat(para).catch(() => null)]);
    if (recorte && recorte.mtimeMs >= original.mtimeMs) continue; // já recortado
    if (/\.svg$/i.test(arquivo)) {
      await fs.copyFile(de, para); // SVG é vetorial: vai como está
    } else {
      // trim() usa a cor do canto superior esquerdo (branco ou transparente) como fundo a remover
      await sharp(de).trim({ threshold: 12 }).png().toFile(para);
    }
    recortados++;
  }
  return { total: arquivos.length, recortados };
}

export default function recortarLogos() {
  return {
    name: 'recortar-logos',
    hooks: {
      'astro:config:setup': async ({ config, logger }) => {
        const { total, recortados } = await recortar(fileURLToPath(config.root));
        logger.info(`${total} logo(s) em ${ORIGEM}; ${recortados} recortado(s) agora`);
      },
    },
  };
}
