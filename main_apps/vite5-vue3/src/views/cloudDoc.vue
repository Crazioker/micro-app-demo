<template>
  <div>
    <micro-app
      name='cloud-doc'
      :url='url'
      @created='handleCreate'
      @beforemount='handleBeforeMount'
      @mounted='handleMount'
      @unmount='handleUnmount'
      @error='handleError'
      @datachange='handleDataChange'
      iframe
    ></micro-app>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'


import config from '../config'


const url = ref(`${config.cloudDoc}`)


    function handleCreate (): void {
      console.log('cloud-doc 创建了')
    }

    function handleBeforeMount (): void {
      console.log('cloud-doc 即将被渲染')
    }

    function handleMount (): void {
      console.log('cloud-doc 已经渲染完成')
    }

    function handleUnmount (): void {
      console.log('cloud-doc 卸载了')
    }

    function handleError (): void {
      console.log('cloud-doc 加载出错了')
    }

    function handleDataChange (e: CustomEvent): void {
      console.log('来自子应用 cloud-doc 的数据:', e.detail.data)
    }
  
</script>

<style>
</style>
