import mqtt from "mqtt";
import { App } from "vue";

export default {
  install(app: App, options: { broker: string }) {
    app.config.globalProperties.$mqtt = mqtt.connect(options.broker);
  },
};

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $mqtt: mqtt.Client;
  }
}
