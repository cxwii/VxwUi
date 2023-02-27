<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

type buttonType = 'primary' | 'success' | 'danger'
const buttonTypeValidator: Array<string> = [ 'primary', 'success', 'danger' ]

export default defineComponent({
  name: 'vxw-button',
  props: {
    // 状态
    type: {
      type: String as PropType<buttonType>,
      validator: (value: buttonType) => {
        return buttonTypeValidator.includes(value)
      },
      default: 'primary'
    },
    // 是否禁用
    disabled: Boolean,
    // 是否圆角
    round: Boolean,
    // 是否加载
    roading: Boolean
  },
  setup(props, ctx) {
    const classs = computed(() => [
      'vxw-button',
      'vxw-button--' + props.type,
      {
        'is-disabled': props.disabled,
        'is-round': props.round,
        'is-roading': props.roading
      }
    ])
    return {
      classs
    }
  }
})
</script>

<template>
  <button :class="classs"></button>
</template>