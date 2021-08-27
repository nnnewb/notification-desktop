import mqtt from "mqtt";

export class NotificationSubscription {
  private client: mqtt.Client;
  constructor(broker?: string, options?: mqtt.IClientOptions) {
    this.client = mqtt.connect(broker, options);
    this.client.on("connect", (packet) => {
      console.log("connect!", packet);
    });
    this.client.on("disconnect", (packet) => {
      console.log("disconnect!", packet);
    });
  }
}
