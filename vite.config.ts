import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig(({ mode, command }) => {
	const env = loadEnv(mode, process.cwd());
	return {
		plugins: [
			vue(),
			// element-plus
			AutoImport({
				resolvers: [ElementPlusResolver()],
			}),
			Components({
				resolvers: [ElementPlusResolver()],
			}),
		],
		server: {
			host: '0.0.0.0',
			prot: Number(80),
			proxy: {
				[env.VITE_BASE_URL]: {
					target: 'http://localhost:3000/',
					ws: true,
					changeOrigin: true,
				},
			},
		},
	};
});
