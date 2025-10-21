<template>
  <div>
    <!-- <img alt="Vue logo" :src="logoPath" /> -->
    <HelloWorld msg="子应用Subapp1 -- Vite+Vue@3.x" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
// const logoPath = new URL('../assets/vue.svg', import.meta.url).href

export default defineComponent({
  name: 'Home',
  setup () {
    // return { logoPath }
  },
  components: {
    HelloWorld
  }
})
</script>

<style>

</style>
