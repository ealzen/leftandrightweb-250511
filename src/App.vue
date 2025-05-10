<script setup>
import { ref } from 'vue';

const showMoreMenu = ref(false);
const toggleMoreMenu = (e) => {
  e.stopPropagation();
  showMoreMenu.value = !showMoreMenu.value;
};

const closeMenu = () => {
  showMoreMenu.value = false;
};

document.addEventListener('click', closeMenu);
</script>

<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="navbar-header">
        <img src="./assets/logo.png" alt="Logo" class="logo">
        <span class="title">Anone</span>
      </div>
      <div class="navbar-items">
        <router-link to="/" class="nav-item">首页</router-link>
        <router-link to="/about" class="nav-item">关于</router-link>
        <router-link to="/contact" class="nav-item">联系我</router-link>
        <div class="nav-item more-menu" @click="toggleMoreMenu">
          更多
          <div class="sub-menu" v-show="showMoreMenu">
            <router-link to="/message-board" class="sub-nav-item">留言板</router-link>
            <router-link to="/form-generator" class="sub-nav-item">表单生成</router-link>
            <router-link to="/todo-list" class="sub-nav-item">待办事项</router-link>
            <router-link to="/media-player" class="sub-nav-item">媒体播放器</router-link>
          </div>
        </div>
      </div>
      <div class="navbar-footer">
        @2025 JS大作业
      </div>
    </nav>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.app-container {
  display: flex;
  min-height: 100vh;
}

.navbar {
  margin-top: 0;
  background-color: #f8f9fa;
  padding: 0;
  width: 150px;
  height: 100vh;
  /* display: flex; */
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  overflow-y: auto;
  transition: width 0.2s ease;
  position: fixed;
}

.navbar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
}

.logo {
  width: 64px !important;
  height: 64px !important;
  object-fit: contain !important;
  display: block;
  margin: 0;
}

.navbar-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  color: #6c757d;
  font-size: 0.8rem;
}

.resize-handle {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background-color: #dee2e6;
  cursor: col-resize;
}

.resize-handle:hover {
  background-color: #adb5bd;
}

.content {
  flex: 1;
  padding: 1rem;
  margin-left: 150px;
}

.navbar-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;

}
.nav-item {
  padding: 0.5rem 1rem;
  color: #495057;
  text-decoration: none;
  position: relative;
}

.more-menu {
  cursor: pointer;
}

.sub-menu {
  position: absolute;
  left: 0;
  top: 100%;
  background-color: #f8f9fa;
  min-width: 150px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 1;
}

.sub-nav-item {
  display: block;
  padding: 0.5rem 1rem;
  color: #495057;
  text-decoration: none;
}

.sub-nav-item:hover {
  background-color: #e9ecef;
}
.nav-item:hover {
  background-color: #e9ecef;
}
.nav-item.router-link-active {
  color: #0d6efd;
  font-weight: bold;
}

</style>
