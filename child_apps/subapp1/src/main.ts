import { createApp, App as AppInstance } from 'vue'
import { createRouter, createWebHashHistory, RouterHistory, Router } from 'vue-router'
import App from './App.vue'
import routes from './router'

declare global {
  interface Window {
     eventCenterForAppNameSubapp1: any
    __MICRO_APP_NAME__: string
    __MICRO_APP_ENVIRONMENT__: string
    __MICRO_APP_BASE_APPLICATION__: string
  }
}

// 与基座进行数据交互
function handleMicroData (router: Router) {
  // eventCenterForAppNameVite 是基座添加到window的数据通信对象
  if (window.eventCenterForAppNameSubapp1) {
    // 主动获取基座下发的数据
    console.log('subapp1 getData:', window.eventCenterForAppNameSubapp1.getData())

    // 监听基座下发的数据变化
    window.eventCenterForAppNameSubapp1.addDataListener((data: Record<string, unknown>) => {
      console.log('subapp1 addDataListener:', data)

      if (data.path && typeof data.path === 'string') {
        data.path = data.path.replace(/^#/, '')
        // 当基座下发path时进行跳转
        if (data.path && data.path !== router.currentRoute.value.path) {
          router.push(data.path as string)
        }
      }
    })

    // 向基座发送数据
    setTimeout(() => {
      window.eventCenterForAppNameSubapp1.dispatch({ myname: 'subapp1' })
    }, 3000)
  }
}


// ----------分割线---umd模式------两种模式任选其一-------------- //
let app: AppInstance | null = null
let router: Router | null = null
let history: RouterHistory | null = null
// 将渲染操作放入 mount 函数
function mount () {
  history = createWebHashHistory()
  router = createRouter({
    history,
    routes,
  })

  app = createApp(App)
  app.use(router)
  app.mount('#subapp1')

  console.log('微应用subapp1渲染了')

  handleMicroData(router)

}

// 将卸载操作放入 unmount 函数
function unmount () {
  app?.unmount()
  history?.destroy()
  // 卸载所有数据监听函数
  window.eventCenterForAppNameSubapp1?.clearDataListener()
  app = null
  router = null
  history = null
  console.log('微应用subapp1卸载了')
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_BASE_APPLICATION__) {
  // @ts-ignore
  window['micro-app-subapp1'] = { mount, unmount }
} else {
  // 非微前端环境直接渲染
  mount()
}

// @ts-ignore
console.log('subapp1变量a: ', window.a)
