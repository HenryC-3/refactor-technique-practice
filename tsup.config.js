import { defineConfig } from "tsup";

export default defineConfig({
	esbuildOptions: (options) => {
		options.banner = {
			js: "import { createRequire } from 'module';const require = createRequire(import.meta.url);",
		};
	},
});
