<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

type buttonType = 'primary' | 'success' | 'danger'
const buttonValidator: Array<string> = [ 'primary', 'success', 'danger' ]

export default defineComponent({
  name: 'vxw-button',
  props: {
    type: {
      type: String as PropType<buttonType>,
      validator: (value: buttonType) => {
        return buttonValidator.includes(value)
      },
      default: 'primary'
    },
    value: {
      type: String,
      validator: (value: string) => {
        if(value.length > 5) {
          return false
        } else {
          return true
        }
      },
      default: '按钮'
    }
  },
  setup(props, ctx) {
    const vxwClass = computed(() => {
      if (!buttonValidator.includes(props.type)) {
        
      }
      return [

      ]
    })
    return {
      vxwClass
    }
  }
})
</script>

<template>
  <!-- <div :class="'button-' + type">
    {{ value }}
  </div> -->
  <div class="vxw-button"></div>
</template>