import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import requireContext from '@originjs/vite-plugin-require-context'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import VitePluginHtmlEnv from 'vite-plugin-html-env'
const path = require('path')
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  server: {
    port: 8080,
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@env': path.resolve(__dirname, './src/env'),
      '~@k12tech': '@k12tech',
      '~vuetify': 'vuetify',
    },
  },
  css: {
    preprocessorOptions: {
      // ...
      sass: {
        additionalData: "\n@import '@/scss/variables.scss'\n",
      },
    },
  },
  plugins: [
    vue(),
    requireContext(),
    Components({
      resolvers: [VuetifyResolver()],
    }),
    VitePluginHtmlEnv(),
    eslint(),
  ],
})
