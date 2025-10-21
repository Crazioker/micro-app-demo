<template>
  <div>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img :src="logoPath" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="subapp2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
const logoPath = new URL('../assets/vue.svg', import.meta.url).href

export default defineComponent({
  name: 'Home',
  setup() {
    return { logoPath }
  },
  components: {
    HelloWorld
  }
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
