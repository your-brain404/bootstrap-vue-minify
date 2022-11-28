<template>
  <b-alert :show="true" variant="danger">Alert!</b-alert>
</template>

<script>
import { BAlert } from "@/plugins/bootstrap-vue/src/components/alert/alert.js";
export default {
  components: {
    BAlert,
  },
};
</script>

<style lang="scss">
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/alert";
</style>
