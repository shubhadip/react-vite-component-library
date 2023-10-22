import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import IstanbulPlugin from 'vite-plugin-istanbul';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
	plugins: [
		react(),
		libInjectCss(),
		IstanbulPlugin({
			include: 'src/*',
			exclude: ['node_modules', 'test/'],
			extension: ['.js', '.ts', '.vue'],
			requireEnv: true,
		}),
	],
	build: {
		minify: true,
		cssCodeSplit: true,
		lib: {
			entry: {
				appbutton: path.resolve(__dirname, 'src/lib/app-button/index.tsx'),
				apptextbox: path.resolve(__dirname, 'src/lib/app-textbox/index.tsx'),
				svgicons: path.resolve(__dirname, 'src/lib/svgicons/index.tsx'),
				index: path.resolve(__dirname, 'src/lib/index.ts')
			},
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				preserveModules: false,
				manualChunks: undefined,
				inlineDynamicImports: false,
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'tailwindcss': 'tailwindcss',
				},
			},
		},
	},
})
