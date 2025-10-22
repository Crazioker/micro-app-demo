<template>
  <div class="layout-container">
    <el-container class="layout-container">
      <el-aside width="220px" class="sidebar">
        <div class="sidebar-header">
          <h3><el-icon><House /></el-icon> 应用菜单</h3>
        </div>
        <el-menu
          :default-active="activeMenu"
          class="sidebar-menu"
          background-color="#2c3e50"
          text-color="#ecf0f1"
          active-text-color="#3498db"
          router
        >
          <el-menu-item index="/">
            <el-icon><House /></el-icon>
            <span>首页</span>
          </el-menu-item>
          
          <el-sub-menu index="subapp">
            <template #title>
              <el-icon><Grid /></el-icon>
              <span>Vite应用</span>
            </template>
            <el-menu-item index="/subapp1">
              <el-icon><Monitor /></el-icon>
              <span>应用一</span>
            </el-menu-item>
            <el-menu-item index="/subapp2">
              <el-icon><Monitor /></el-icon>
              <span>应用二</span>
            </el-menu-item>
          </el-sub-menu>
        <!-- <el-sub-menu index="subapp">
            <template #title>
              <el-icon><Grid /></el-icon>
              <span>外部应用</span>
            </template>
            <el-menu-item index="/cloud-doc">
              <el-icon><Monitor /></el-icon>
              <span>Cloud doc</span>
            </el-menu-item>
          </el-sub-menu> -->
        </el-menu>
      </el-aside>
      
      <!-- 主内容区 -->
      <el-main class="main-content">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { 
  ElContainer, 
  ElAside, 
  ElMain, 
  ElMenu, 
  ElMenuItem, 
  ElSubMenu,
  ElIcon 
} from 'element-plus'
import { House, Grid, Monitor } from '@element-plus/icons-vue'

const route = useRoute()

// 计算当前激活的菜单项
const activeMenu = computed(() => {
  return route.path
})
</script>

<style scoped>
.layout-container {
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid #34495e;
  text-align: center;
}

.sidebar-header h3 {
  margin: 0;
  font-size: 18px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.sidebar-menu {
  flex: 1;
  border: none;
}

.sidebar-menu .el-menu-item,
.sidebar-menu .el-sub-menu__title {
  height: 48px;
  line-height: 48px;
  margin: 0;
  border-bottom: 1px solid #34495e;
}

.sidebar-menu .el-menu-item:hover,
.sidebar-menu .el-sub-menu__title:hover {
  background-color: #34495e !important;
}

.sidebar-menu .el-menu-item.is-active {
  background-color: #3498db !important;
  color: white !important;
}

.main-content {
  padding: 10px;
  background-color: #f5f7fa;
  overflow-y: auto;
}

/* 子菜单样式 */
.sidebar-menu .el-menu {
  background-color: #253443 !important;
}

.sidebar-menu .el-menu .el-menu-item {
  border-bottom: 1px solid #2a3a4a;
}
</style>