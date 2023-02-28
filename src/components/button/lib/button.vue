<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

// button type
type buttonType = 'primary' | 'success' | 'danger'
const buttonTypeValidator: Array<string> = [ 'primary', 'success', 'danger' ]

// button circle
type buttonCircle = 'anniu' | 'gongneng_chenggong' | 'shanchu'
const buttonCircleValidator: Array<string> = [ 'anniu', 'gongneng_chenggong', 'shanchu' ]

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
    // 是否圆形icon
    circle: {
      type: String as PropType<buttonCircle>,
      validator: (value: buttonCircle) => {
        return buttonCircleValidator.includes(value)
      }
    },
    // 是否禁用
    disabled: Boolean,
    // 是否圆角
    round: Boolean
  },
  setup(props, ctx) {
    const classs = computed(() => [
      'vxw-button',
      'vxw-button--' + props.type,
      {
        'is-disabled': props.disabled,
        'is-round': props.round,
        'is-circle': props.circle
      }
    ])

    const disabledClasss = computed(() => [
      'vxw-buttonDisaled',
      'vxw-buttonDisaled--' + props.type,
      {
        'is-disabled': props.disabled,
        'is-round': props.round,
        'is-circle': props.circle
      }
    ])

    const icon = props.circle
    const disabled = props.disabled

    return {
      classs,
      disabledClasss,
      icon,
      disabled
    }
  }
})
</script>

<template>
  <!-- icon -->
  <button v-if="icon" :class="classs">
    <vxw-icon :name="icon"></vxw-icon>
  </button>
  <button v-else-if="disabled" :class="disabledClasss">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
  <!-- type -->
  <button v-else :class="classs">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>