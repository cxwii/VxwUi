<script lang="ts">
import { defineComponent, PropType } from 'vue'
type buttonType = 'primary' | 'success' | 'danger'

export default defineComponent({
  name: 'vxw-button',
  props: {
    type: {
      type: String as PropType<buttonType>,
      default: 'primary'
    },
    value: {
      type: String,
      default: '按钮'
    }
  },
  setup(props, ctx) {
  }
})
</script>

<template>
  <div :class="'button-' + type">
    {{ value }}
  </div>
</template>

<style scoped lang="scss">
@import '../style/button.scss'
</style>