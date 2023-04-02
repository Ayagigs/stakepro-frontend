
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nodePolyfills from 'vite-plugin-node-stdlib-browser'

export default defineConfig({
  // define: {
          //  global: '({})',
        //  'process.env': {},
    //  },
  // other options
  plugins: [react(), nodePolyfills()]
})





