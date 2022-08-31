import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'

// 拓展setup插件，支持在script标签使用name属性
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// rollup打包分析插件
import { visualizer } from 'rollup-plugin-visualizer'
import { configHtmlPlugin } from './html'
import { configUnocss } from './unocss'

export function setupVitePlugins(viteEnv: ViteEnv, isBuild: Boolean): PluginOption[] {
  const plugins = [vue(), VueSetupExtend(), configHtmlPlugin(viteEnv, isBuild), configUnocss()]

  if (isBuild) {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    )
  }
  return plugins
}
