import "./assets/main.css";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import { router } from "@/providers";

const app = createApp(App);

app.use(createPinia()).use(router);
app.use(ElementPlus);

app.mount("#app");
