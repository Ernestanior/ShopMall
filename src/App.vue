<template>

  <!-- <router-view></router-view> -->
  <router-view v-slot="{ Component }">
    <keep-alive exclude="GoodsDetail">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <main-tab></main-tab>
</template>

<script>
  import MainTab from './components/content/mainTabBar/MainTabBar.vue'

  export default {
    name: 'App',
    components: {
      MainTab
    }
  }
</script>

<style>
  @import "./assets/css/reset.css";

  body {
    background-color: rgb(230, 241, 255);
  }
</style>