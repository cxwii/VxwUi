<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'vxw-icon',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup(props, ctx) {

  }
})
</script>

<template>
  <i :class="`vxw-${name}`"></i>
</template>