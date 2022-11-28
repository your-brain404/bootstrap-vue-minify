<template>
  <div class="modal-section">
    <button v-b-modal.modal-1>Launch demo modal</button>
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>
  
  <script>
import { BModal } from "bootstrap-vue";
import { VBModal } from "bootstrap-vue";
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
@import "bootstrap/scss/modal";
@import "bootstrap-vue/src/components/modal";
</style>
  