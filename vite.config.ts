/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { gleam } from '@gleam-tools/vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    gleam(),
    tailwindcss(),
  ],
  test: {
    include: ['src/**/*.test.ts']
  },
})
