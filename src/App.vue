<template>
  <router-view />
</template>

<script>
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    RouterView,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
</style>
