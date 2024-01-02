import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      deps: {
        inline: ['vitest-canvas-mock']
      },
      css: false,
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html']
      }
    }
  })
)
