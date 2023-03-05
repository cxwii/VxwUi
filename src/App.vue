<script setup lang="ts">
  import {onMounted} from 'vue'
import vxw from './vxw';
  const clickButton = () => {
    console.log('点击事件')
  }

  onMounted(() => {
    console.log(`
  /\\ \\/\\ \\                    /\\ \\/\\ \\  __    
  \\ \\ \\ \\ \\  __  _  __  __  __\\ \\ \\ \\ \\/\\_\\   
   \\ \\ \\ \\ \\/\\ \\/'\\/\\ \\/\\ \\/\\ \\\\ \\ \\ \\ \\/\\ \\  
    \\ \\ \\_/ \\/>  </\\ \\ \\_/ \\_/ \\\\ \\ \\_\\ \\ \\ \\ 
     \\  \\___//\\_/\\_\\\\ \\___x___/' \\ \\_____\\ \\_\\
       \\/__/ \\//\\/_/ \\/__//__/    \\/_____/\\/_/
    `)
  })
</script>

<template>
  <vxw-button type="primary" @click="clickButton">按钮</vxw-button>
  <vxw-button type="success" round>成功</vxw-button>
  <vxw-button type="danger" disabled>失败</vxw-button>
  <vxw-button type="primary" circle="anniu"></vxw-button>
  <vxw-button type="success" circle="gongneng_chenggong"></vxw-button>
  <vxw-button type="danger" circle="shanchu" disabled></vxw-button>
  <br/>
  <vxw-icon name="anniu">123</vxw-icon>
  <vxw-icon name="gongneng_chenggong"></vxw-icon>
  <vxw-icon name="shanchu"></vxw-icon>
  <br/>
  <vxw-button-group>
    <vxw-button type="success">成功</vxw-button>
    <vxw-button type="danger" disabled>失败</vxw-button>
  </vxw-button-group>
</template>

<style scoped>
</style>
