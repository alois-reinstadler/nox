import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';

import { enhancedImages } from '@sveltejs/enhanced-img';
import { ViteHLSPlugin } from '@octamap/vite-hls';

import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [ViteHLSPlugin(), enhancedImages(), sveltekit(), tailwindcss()]
});
