<template>
  <b-alert :show="true" variant="danger">Alert!</b-alert>
</template>

<script>
import BAlert from "@/components/alert/BAlert.vue";
export default {
  components: {
    BAlert,
  },
};
</script>

<style>
</style>