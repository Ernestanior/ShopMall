<template>
  <nav-bar class="home_nav">
    <template #center>
      <div>
        购物街
      </div>
    </template>
  </nav-bar>
  <tab-control ref="tabControl_new" @tabControl="HandleTabControl" class="tab_control_new" :titles='titles'
    v-show="isTabControlFix"></tab-control>
  <scroll class="content" ref="scroll" :probe-type="3" @scroll="HandleScroll" :pull-up-load="true"
    @pullingUp="LoadMore">
    <home-swiper :banner="banner" @swiper-load="swiperLoad"></home-swiper>
    <home-recom :recommend="recommend"></home-recom>
    <tab-control ref="tabControl" @tabControl="HandleTabControl" class="tab_control" :titles='titles'></tab-control>
    <goods-list :goods="goods[titles[currentIndex]].list" @handle-load="LoadFinish"></goods-list>
  </scroll>
  <back-top @click="backClick" v-show="isShowBackTop"></back-top>
</template>

<script>
  import { getHomeData, getHomeGoods } from '@/network/home.js'

  import NavBar from '@/components/common/navbar/NavBar.vue'
  import Scroll from '@/components/common/scroll/Scroll.vue'
  import BackTop from '@/components/common/backtop/BackTop.vue'
  import TabControl from '@/components/content/tabControl/TabControl.vue'
  import GoodsList from '@/components/content/goods/GoodsList.vue'

  import HomeSwiper from './homecomp/HomeSwiper.vue'
  import HomeRecom from './homecomp/HomeRecom.vue'

  import { debounce } from '@/common/utils.js'



  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecom,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banner: [],
        keywords: [],
        recommend: [],
        titles: ['pop', 'new', 'sell'],
        currentIndex: 0,
        goods: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] }
        },
        handleRefresh: null,
        isShowBackTop: false,
        tabControlOffsetTop: 0,
        isTabControlFix: false,
        saveY: 0
      }
    },
    methods: {
      getHomeData() {
        getHomeData().then(res => {
          this.banner = res.data.banner.list;
          this.keywords = res.data.keywords.list;
          this.recommend = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page
        getHomeGoods(type, page + 1).then(res => {
          this.goods[type].list.push(...res.list)
          this.goods[type].page++
        })

      },
      HandleTabControl(index) {
        this.currentIndex = index
        this.$refs.tabControl.currentIndex = index
        this.$refs.tabControl_new.currentIndex = index
      },
      backClick() {
        this.$refs.scroll.scroll.scrollTo(0, 0, 1000)
      },
      HandleScroll(position) {
        this.isShowBackTop = position.y < -1000 ? true : false
        this.isTabControlFix = position.y < (-this.tabControlOffsetTop)
      },
      LoadMore() {
        console.log('loadmore');
        this.getHomeGoods(this.titles[this.currentIndex])
        this.$refs.scroll.scroll.finishPullUp()
        // console.log(this.goods);
      },
      LoadFinish() {
        // const refresh = this.debounce(this.$refs.scroll.scroll.refresh, 5000)
        this.handleRefresh()
        // this.$refs.scroll.refresh()
      },
      swiperLoad() {
        this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
      }

    },

    created() {
      this.getHomeData(),
        this.getHomeGoods('pop')
      this.getHomeGoods('new'),
        this.getHomeGoods('sell')
    },
    mounted() {
      this.handleRefresh = debounce(this.$refs.scroll.refresh, 500)
    }
  }
</script>
<style scoped>
  .home_nav {
    background-color: #1653c4;
    color: #fff;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
  }

  .tab_control_new {
    position: absolute;
    z-index: 9;
  }

  .tab_control {
    position: fix;
    top: 3rem;
  }

  .content {
    height: 700px;
    overflow: hidden;
  }
</style>