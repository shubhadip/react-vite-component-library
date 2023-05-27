import path from 'path';
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
export default defineConfig({
	build: {
		outDir: 'build',
		lib: {
			entry: path.resolve(__dirname, 'src/types/enums.ts'),
			formats: ['es'],
			fileName: 'enums'
		}
	},
	plugins: [dts()]
})
