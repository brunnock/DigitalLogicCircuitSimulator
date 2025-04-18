import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
	main: resolve(__dirname, 'index.html'),
        gates: resolve(__dirname, 'gates.html'),
        encoder: resolve(__dirname, 'encoder.html'),
        decoder: resolve(__dirname, 'decoder.html'),
        sevenSegment: resolve(__dirname, '7segment.html'),
        adders: resolve(__dirname, 'adders.html'),
        subs: resolve(__dirname, 'subs.html'),
	comparator: resolve(__dirname, 'comparator.html'),
	latches: resolve(__dirname, 'latches.html'),
	flips: resolve(__dirname, 'flips.html'),
	mux: resolve(__dirname, 'mux.html'),
	dmux: resolve(__dirname, 'dmux.html'),
      },
    },
  },
})
