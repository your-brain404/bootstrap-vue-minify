<template>
  <b-alert :show="true" variant="danger">Alert!</b-alert>
</template>

<script>
import { BAlert } from "bootstrap-vue";
export default {
  components: {
    BAlert,
  },
};
</script>

<style lang="scss">
@import "bootstrap/scss/alert";
</style>
