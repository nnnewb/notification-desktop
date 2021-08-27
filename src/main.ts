import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import installElementPlus from "./plugins/element";
import mqtt from "./plugins/mqtt";

const app = createApp(App);
installElementPlus(app);
app.use(router).use(mqtt, { broker: "ws://127.0.0.1:8883" }).mount("#app");
