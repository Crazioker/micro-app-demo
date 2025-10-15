<template>
  <div>
    <micro-app
      name='subapp1'
      :url='url'
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

<script lang="ts" setup>
import { ref } from 'vue'

import config from '../config'

const url = ref(`${config.app1}/subapp1/`)
const microAppData = ref({msg: '来自基座的数据'})

console.log('app1 url:', url.value)

    function handleCreate (): void {
      console.log('subapp1 创建了')
    }

    function handleBeforeMount (): void {
      console.log('subapp1 即将被渲染')
    }

    function handleMount (): void {
      console.log('subapp1 已经渲染完成')

      setTimeout(() => {
        // @ts-ignore
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    }

    function handleUnmount (): void {
      console.log('subapp1 卸载了')
    }

    function handleError (): void {
      console.log('subapp1 加载出错了')
    }

    function handleDataChange (e: CustomEvent): void {
      console.log('来自子应用 subapp1 的数据:', e.detail.data)
    }
  
</script>

<style>
</style>
