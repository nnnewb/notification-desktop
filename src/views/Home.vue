<template>
  <div>
    <el-table :data="notifications">
      <el-table-column label="主题" prop="topic" />
      <el-table-column label="消息" prop="message" />
      <el-table-column label="时间" prop="datetime" :formatter="dateFormat" />
    </el-table>

    <el-form :inline="true">
      <el-form-item label="Topic">
        <el-input v-model="topic" placeholder="topic" />
      </el-form-item>
      <el-form-item label="消息">
        <el-input v-model="message" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="pub">发布</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="sub">订阅</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DateTime } from "luxon";

interface NotificationData {
  topic: string;
  message: string;
  datetime: DateTime;
}

export default defineComponent({
  name: "Home",
  components: {},
  methods: {
    dateFormat: (_row: number, _col: number, val: DateTime) => val.toFormat("yyyy-LL-dd HH:mm:ss.SSS"),
    pub() {
      this.$mqtt.publish(this.topic, this.message);
    },
    recv(topic: string, payload: Buffer) {
      this.notifications.push({
        datetime: DateTime.now(),
        message: payload.toString("utf8"),
        topic: topic,
      });
    },
    sub() {
      this.$mqtt.subscribe(this.topic);
    },
  },
  data: function () {
    return {
      topic: "",
      message: "",
      notifications: [] as NotificationData[],
    };
  },
  mounted() {
    this.$mqtt.on("message", this.recv.bind(this));
  },
  unmounted() {
    this.$mqtt.off("message", this.recv.bind(this));
  },
});
</script>
