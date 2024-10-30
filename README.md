# Create custom element using preact

Mini project for learning how to convert Accordion Component form Preline to custom element using Preact.

### AccordionGroup.jsx

```jsx
export function AccordionGroup(props) {
    let {children} = props;

    return (
        <div class="hs-accordion-group">
            {children}
        </div>    
    )
}
```

### Accordion.jsx

```jsx
import { HTML } from './HTML.jsx';

export function Accordion(props) {
  let {title, body} = props;  

  function base64_decode(text) {
    return atob(text);
  }

  return (
    <div class="hs-accordion active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
      <button class="hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-primary dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
        {title}
        <svg class="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6"></path>
        </svg>
        <svg class="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m18 15-6-6-6 6"></path>
        </svg>
      </button>
      <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
        <div class="text-gray-800 dark:text-neutral-200">
          <HTML>{base64_decode(body)}</HTML>
        </div>
      </div>
    </div>
  )
}
```

### package.json

```json
{
  "name": "preact-preline",
  "description": "Development template for Preact + Preline",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "preact": "^10.23.1",
    "preact-slots": "^1.0.0",
    "preline": "^2.5.1"
  },
  "devDependencies": {
    "@preact/preset-vite": "^2.9.0",
    "postcss": "^8.4.47",
    "preact-custom-element": "^4.3.0",
    "tailwindcss": "^3.4.14",
    "vite": "^5.4.1",
    "vite-plugin-css-injected-by-js": "^3.4.0"
  }
}
```

### bundle.js

```js
import register from 'preact-custom-element';
import { AccordionGroup } from './AccordionGroup';
import { Accordion } from './Accordion';
import './bundle.css'
import '../node_modules/preline/dist/accordion.js';

register(AccordionGroup, 'x-accordion-group', []);
register(Accordion, 'x-accordion', ['title', 'body']);
```

### vite.config.js

```js
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
```

### tailwind.config.js

```js
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  darkMode: 'selector',
  theme: {
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,  
        slate: colors.slate,
        blue: colors.blue,    
        red: colors.red,
        neutral: colors.neutral,
        primary: '#94FF16'
    }
  },
  plugins: [
    require('preline/plugin')
  ],
}
```
