<template>
  <div>

  </div>
</template>

<script>
import update from "../service/update";

export default {
  mounted() {
    update("api");
  }
};
</script>

<style lang="scss" scoped>
</style>
