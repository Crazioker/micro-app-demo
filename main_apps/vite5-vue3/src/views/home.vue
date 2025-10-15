<template>
  <div>
    <HelloWorld msg="主应用 - Vite + Vue@3.x" />
        <micro-app
      name='test'
      url='http://localhost:3001/subapp1/'
    ></micro-app>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style>

</style>
