<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    methods: {
      refresh() {
        this.scroll && this.scroll.refresh()
      }
    },
    mounted() {
      //1. 创建better-scroll实例
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      //2. 监听滚动的位置
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
      })
      //3. 监听上拉加载更多
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
  }
</script>
<style scoped>

</style>