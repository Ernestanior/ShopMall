<template>
  <nav-bar class="navbar">
    <template #left>
      <div class="back" @click="goBack">
        <img src="@/assets/icon/youla.png" alt="">
      </div>
    </template>
    <template #center>
      <div v-for="(item,index) in titles" class="title_item" @click="titleClick(index)">
        <span :class="{active:index===currentIndex}">{{item}}</span>
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'

  export default {
    name: 'DetailNav',
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
        this.$emit('titleClick', index)
      },
      goBack() {
        this.$router.back()
      }
    }
  }
</script>
<style scoped>
  .navbar {
    background-color: #fff;
  }

  .title_item {
    flex: 1;
    font-size: 14px;
    font-weight: 400;
  }

  .title_item>span {
    padding: 3px 0;
  }

  .active {
    color: #1653c4;
    border-bottom: 2px solid#1653c4;
  }

  .back {
    padding: 10px 10px 0 0;
  }

  .back>img {
    width: 30px;
    transform: rotate(90deg);
  }
</style>