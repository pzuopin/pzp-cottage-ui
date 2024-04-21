import { defineConfig } from 'vite'
import { resolve } from "path";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
		// library entry and output settings
		lib: {
			entry: resolve(__dirname, "lib/main.ts"),
			name: "pzp-cottage-ui",
			fileName: "pzp-cottage-ui",
		},
		// bundler options
		// externalize react-related imports
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "react/jsx-runtime",
				},
			},
		},
	},
})
