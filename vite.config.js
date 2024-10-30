import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import tailwindcss from 'tailwindcss';
import fs from 'fs';

export default defineConfig({
  plugins: [
    preact(),
    cssInjectedByJsPlugin()
  ],
  css: {
      postcss: {
          plugins: [
              tailwindcss()
          ]
      }
    },
    build: {
      outDir: './dist',
      minify: true,
      sourcemap: false,
      emptyOutDir: true,

      lib: {
          entry: './src/bundle.jsx',
          name:'___',
          formats: ['iife'],
          fileName: (format) => `[name].js`
      }


    },
    server: {
        https: {
            key: fs.readFileSync(`./server.key`),
            cert: fs.readFileSync(`./server.crt`)
        }
    }
})
