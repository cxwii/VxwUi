<script setup lang="ts">
  const clickButton = () => {
    console.log('点击了按钮1 :>> ')
  }
</script>

<template>
  <vxw-button type="primary">按钮</vxw-button>
  <vxw-button type="success" round>成功</vxw-button>
  <vxw-button type="danger" disabled>失败</vxw-button>
  <vxw-button type="primary" circle="anniu"></vxw-button>
  <vxw-button type="success" circle="gongneng_chenggong"></vxw-button>
  <vxw-button type="danger" circle="shanchu" disabled></vxw-button>
  <br/>
  <vxw-icon name="anniu">123</vxw-icon>
  <vxw-icon name="gongneng_chenggong"></vxw-icon>
  <vxw-icon name="shanchu"></vxw-icon>
</template>

<style scoped>
</style>
