import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import Components from "unplugin-vue-components/vite";
import { VuetifyResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  server: { port: 8080 },
  plugins: [
    createVuePlugin(),
    Components({
      resolvers: [VuetifyResolver()],
      dts: false,
    }),
  ],
});
