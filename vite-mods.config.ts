import path from 'path';
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		emptyOutDir: false,
		outDir: 'dist',
		lib: {
			entry: path.resolve(__dirname, 'src/lib/types/enums.ts'),
			formats: ['es'],
			fileName: 'enums'
		}
	},
	plugins: []
})
