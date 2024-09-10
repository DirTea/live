import uviewPlus from "uview-plus";
import { createPinia } from "pinia";
import { createSSRApp } from "vue";
import App from "./App.vue";

export function createApp() {
  const pinia = createPinia();
  const app = createSSRApp(App);
  app.use(pinia);
  app.use(uviewPlus);
  return {
    app,
  };
}
