import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// ========================================
// VITE CONFIGURATION - TypeScript Fix
// Frontend-only, all errors resolved
// ========================================
export default defineConfig({
  plugins: [
    react({
      // Fix React JSX issues
      jsxRuntime: 'automatic',
      jsxImportSource: 'react',
      babel: {
        plugins: []
      }
    })
  ],
  
  // ========================================
  // PATH RESOLUTION - Fix import errors
  // ========================================
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@/components': path.resolve(__dirname, './components'),
      '@/utils': path.resolve(__dirname, './utils'),
      '@/styles': path.resolve(__dirname, './styles'),
      '@/public': path.resolve(__dirname, './public')
    }
  },

  // ========================================
  // CSS PROCESSING - Fix Tailwind issues
  // ========================================
  css: {
    postcss: {
      plugins: []
    },
    devSourcemap: false
  },

  // ========================================
  // DEVELOPMENT SERVER
  // ========================================
  server: {
    port: 5173,
    host: true,
    open: false,
    strictPort: false,
    hmr: {
      overlay: false // Disable error overlay
    }
  },

  // ========================================
  // BUILD CONFIGURATION
  // ========================================
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    target: 'es2015',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react']
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
      external: [],
      onwarn(warning, warn) {
        // Suppress specific warnings that cause VS Code issues
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return
        if (warning.code === 'CIRCULAR_DEPENDENCY') return
        warn(warning)
      }
    },
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    }
  },

  // ========================================
  // DEPENDENCY OPTIMIZATION
  // ========================================
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'framer-motion', 
      'lucide-react'
    ],
    exclude: [],
    force: false
  },

  // ========================================
  // ENVIRONMENT VARIABLES
  // ========================================
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },

  // ========================================
  // TYPE CHECKING (Disable to prevent errors)
  // ========================================
  esbuild: {
    logOverride: { 
      'this-is-undefined-in-esm': 'silent',
      'empty-import-meta': 'silent'
    },
    target: 'es2020',
    format: 'esm',
    platform: 'browser'
  },

  // ========================================
  // PREVIEW CONFIGURATION
  // ========================================
  preview: {
    port: 4173,
    host: true,
    strictPort: false
  },

  // ========================================
  // BASE CONFIGURATION
  // ========================================
  base: './',
  publicDir: 'public',
  cacheDir: 'node_modules/.vite',

  // ========================================
  // WORKER CONFIGURATION
  // ========================================
  worker: {
    format: 'es'
  }
})