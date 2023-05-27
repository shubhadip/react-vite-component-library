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
		lib: {
			entry: path.resolve(__dirname, 'src/lib/index.ts'),
			name: 'react-component-library',
			formats: ['es'],
			fileName: (format) => `index.${format}.js`,
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
