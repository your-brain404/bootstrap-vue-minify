<template>
  <div class="modal-section">
    <button v-b-modal.modal-1>Launch demo modal</button>
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>
  
  <script>
import { BModal } from "@/plugins/bootstrap-vue/src/components/modal/modal";
import { VBModal } from "@/plugins/bootstrap-vue/src/directives/modal/modal.js";
export default {
  components: {
    BModal,
  },
  directives: {
    "b-modal": VBModal,
  },
};
</script>

<style lang="scss">
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/modal";
@import "@/plugins/bootstrap-vue/src/components/modal";
</style>
  