<template>
  <div class="container">
    <swiper class="detail_swiper">
      <swiper-item v-for="(item,index) in topImg" :key="index">
        <img :src="item" alt="" class="item_img">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from '@/components/common/swiper/index.js'
  export default {
    name: 'DetailSwiper',
    components: {
      Swiper, SwiperItem
    },
    props: {
      topImg: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      btnclick() {
        console.log(this.topImg)
      }
    },
  }
</script>

<style scoped>
  .item_img {
    width: 100%;
  }

  .detail_swiper {
    height: 300px;
    overflow: hidden;
  }
</style>