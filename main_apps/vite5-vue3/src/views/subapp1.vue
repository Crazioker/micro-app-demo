<template>
  <div>
    <micro-app
      name='subapp1'
      :url='url'
      baseroute='/main-vite/subapp1'
      :data='microAppData'
      @created='handleCreate'
      @beforemount='handleBeforeMount'
      @mounted='handleMount'
      @unmount='handleUnmount'
      @error='handleError'
      @datachange='handleDataChange'
    ></micro-app>
  </div>
</template>

<script lang="ts">
import config from '../config'

export default {
  name: 'subapp1',
  data () {
    return {
      url: `${config.app1}/child/subapp1/`,
      microAppData: {msg: '来自基座的数据'}
    }
  },
  methods: {
    handleCreate (): void {
      console.log('subapp1 创建了')
    },

    handleBeforeMount (): void {
      console.log('subapp1 即将被渲染')
    },

    handleMount (): void {
      console.log('subapp1 已经渲染完成')

      setTimeout(() => {
        // @ts-ignore
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount (): void {
      console.log('subapp1 卸载了')
    },

    handleError (): void {
      console.log('subapp1 加载出错了')
    },

    handleDataChange (e: CustomEvent): void {
      console.log('来自子应用 subapp1 的数据:', e.detail.data)
    },
  }
}
</script>

<style>
</style>
