<script setup lang="ts">
  const clickButton = () => {
    console.log('点击了按钮1 :>> ')
  }
</script>

<template>
  <vxw-button @click=clickButton type="primary">按钮1</vxw-button>
  <vxw-button type="success" @click=clickButton disabled="false">按钮2</vxw-button>
  <vxw-button type="danger" round>按钮3</vxw-button>
  <vxw-button type="danger" round></vxw-button>
  <br/>
  <vxw-icon name="jiazai"></vxw-icon>
  <vxw-icon name="gongneng_chenggong"></vxw-icon>
  <vxw-icon name="shanchu"></vxw-icon>
</template>

<style scoped>
</style>
