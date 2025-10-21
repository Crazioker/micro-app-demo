import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')


// @ts-ignore
console.log('subapp2变量a: ', window.a)