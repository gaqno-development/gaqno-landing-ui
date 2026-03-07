import path from 'path'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'mock-assets',
      enforce: 'pre',
      resolveId(id) {
        if (/\.(jpeg|jpg|png|webp|gif|svg)$/.test(id)) {
          return '\0virtual:' + id
        }
      },
      load(id) {
        if (id.startsWith('\0virtual:')) {
          return 'export default { src: "/mock-asset", width: 300, height: 300 }'
        }
      },
    },
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['app/**/*.{ts,tsx}', 'lib/**/*.ts', 'utils/**/*.ts', 'components/**/*.{ts,tsx}', 'middleware.ts'],
      exclude: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}', '**/layout.tsx', '**/loading.tsx', '**/app/types/**', 'next-env.d.ts'],
      thresholds: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
