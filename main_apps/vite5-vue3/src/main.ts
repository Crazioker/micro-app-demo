import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import App from './App.vue'
import router from './router'
import microApp from '@micro-zoe/micro-app'

// 初始化微前端
microApp.start({
    // 'disable-memory-router': true, // 禁用内存路由
    'router-mode': 'state',
})

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')

// @ts-ignore
window.a = 'base a'
// @ts-ignore
console.log('基座变量a: ', window.a)