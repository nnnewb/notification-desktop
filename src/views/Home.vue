<template>
  <div>
    <el-button @click="pub">pub</el-button>
    <el-button @click="sub">sub</el-button>
  </div>
</template>

<script lang="ts">
import { NotificationSubscription } from "@/lib/pubsub";
import { defineComponent } from "vue";

export default defineComponent({
  subscription: null,
  name: "Home",
  components: {},
  methods: {
    pub() {
      return;
    },
    sub() {
      return;
    },
  },
  data: () => {
    return {
      subscription: new NotificationSubscription("ws://127.0.0.1:8883"),
    };
  },
});
</script>
