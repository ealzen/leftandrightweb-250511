import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import VueRouter from 'unplugin-vue-router/vite';
import { fileURLToPath, URL } from 'url';

// https://vite.dev/config/
export default defineConfig({
    plugins: [VueRouter({
        // 可以自定义路由生成规则
        routesFolder: 'src/pages', // 默认是 'src/pages'
    }), vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
