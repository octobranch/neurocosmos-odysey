import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    glsl(),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240
    })
  ],
  build: {
    target: 'es2022',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          tfjs: ['@tensorflow/tfjs'],
          glsl: ['vite-plugin-glsl']
        }
      }
    }
  },
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  }
})
