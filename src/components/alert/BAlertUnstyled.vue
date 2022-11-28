<template>
  <b-alert
    :value="value"
    :show="show"
    :dismiss-label="dismissLabel"
    :dismissible="dismissible"
    :fade="fade"
    :variant="variant"
    @input="$emit('input', $event)"
    @dismissed="$emit('dismissed')"
    @dismiss-count-down="$emit('dismiss-count-down', $event)"
  >
    <slot></slot>
    <template #dismiss>
      <slot name="dismiss"></slot>
    </template>
  </b-alert>
</template>
  
  <script>
import { BAlert } from "@/plugins/bootstrap-vue/src/components/alert/alert.js";
export default {
  components: {
    BAlert,
  },
  props: {
    dismissLabel: {
      type: String,
      default: "Close",
    },
    dismissible: Boolean,
    fade: Boolean,
    show: {
      type: [Boolean, Number, String],
      default: false,
    },
    value: {
      type: [Boolean, Number, String],
      default: false,
    },
    variant: {
      type: String,
      default: "info",
    },
  },
};
</script>
  
