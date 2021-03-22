<template>
  <swiper>
    <swiper-item v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="SwiperLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import { Swiper, SwiperItem } from '@/components/common/swiper/index.js'
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        isLoad: true
      }
    },
    props: {
      banner: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper, SwiperItem
    },
    methods: {
      SwiperLoad() {
        if (this.isLoad) {
          this.$emit("swiperLoad")
          this.isLoad = false
        }

      }
    },
  }

</script>