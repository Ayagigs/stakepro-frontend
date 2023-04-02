import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


import reactRefresh from '@vitejs/plugin-react-refresh'
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

export default defineConfig({

  plugins: [react()],
  optimizeDeps: {

    esbuildOptions: {
        // Node.js global to browser globalThis
  
        define: {
            global: 'globalThis'
        },
        // Enable esbuild polyfill plugins
        plugins: [
            NodeGlobalsPolyfillPlugin({
                buffer: true
            }),
            esbuildCommonjs(['react-calendar','react-date-picker'])
          ]
        }
    },

    vite: {
      optimizeDeps: {
        exclude: [
          'date-fns'
        ]
      }
    },
    
  define: {
    // Some libraries use the global object, even though it doesn't exist in the browser.
    // Alternatively, we could add `<script>window.global = window;</script>` to index.html.
    // https://github.com/vitejs/vite/discussions/5912
    global: {},
    'process.env': {}
  },
})


