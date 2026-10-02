// Configuração do Astro: site estático + Tailwind via plugin do Vite
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import recortarLogos from './integracoes/recortar-logos.mjs';

export default defineConfig({
  // Recorta a margem dos logos de clientes antes do build
  integrations: [recortarLogos()],
  vite: {
    plugins: [tailwindcss()],
  },
});
