import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import IstanbulPlugin from 'vite-plugin-istanbul';

export default defineConfig({
	plugins: [
		react(),
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
				apptextbox: path.resolve(__dirname, 'src/lib/app-textbox/index.tsx')
			},
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'tailwindcss': 'tailwindcss',
				},
			},
		},
	},
})
