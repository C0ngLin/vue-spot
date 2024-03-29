import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./views/spot-home.vue";
import router from "./router";

import "./assets/main.css";
import VueAxios from "vue-axios";
import axios from "axios";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.mount("#app");
