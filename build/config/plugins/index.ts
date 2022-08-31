import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'

// 拓展setup插件，支持在script标签使用name属性
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// rollup打包分析插件
import { visualizer } from 'rollup-plugin-visualizer'

// vite-html-plugin
import { configHtmlPlugin } from './html'

// unocss
import { configUnocss } from './unocss'

// unplugin 按需引入组件
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export function setupVitePlugins(viteEnv: ViteEnv, isBuild: Boolean): PluginOption[] {
  const plugins = [
    vue(),
    VueSetupExtend(),
    configHtmlPlugin(viteEnv, isBuild),
    configUnocss(),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ]

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
