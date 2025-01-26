import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path-browserify';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: false, // 型宣言ファイルを生成しない
      resolvers: [
        (componentName: string) => {
          if (componentName.startsWith('El')) {
            return {
              name: componentName,
              as: componentName,
              from: 'element-plus',
            };
          }
          return null;
        },
      ],
    }),
  ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
    },
    server: {
      host: '0.0.0.0',  // すべてのネットワークインターフェースからの接続を許可
      port: 5173,       // 任意のポート番号に変更可能
    },
});