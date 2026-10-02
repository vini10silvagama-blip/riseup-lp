// Configuração do Astro: site estático + Tailwind via plugin do Vite
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import recortarLogos from './integracoes/recortar-logos.mjs';
import simboloSelo from './integracoes/simbolo-selo.mjs';

export default defineConfig({
  // Antes do build: recorta a margem dos logos de clientes e prepara o símbolo do selo do hero
  integrations: [recortarLogos(), simboloSelo()],
  vite: {
    plugins: [tailwindcss()],
  },
});
