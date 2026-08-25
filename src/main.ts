import { createPinia } from "pinia";
import { createSSRApp } from "vue";
import App from "./App.vue";
import use_share from "./hooks/use_share";
import '@tdesign/uniapp/theme.css';

export function createApp() {
  const pinia = createPinia();
  const app = createSSRApp(App);
  app.mixin(use_share);
  app.use(pinia);
  return {
    app,
  };
}
