<template>
  <div id="detail">
    <detail-nav ref="detail_nav" class="detail_nav" @title-click="titleClick"></detail-nav>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <!-- <div>{{$store.state.cartList}}</div> -->
      <detail-swiper :top-img="topImg"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="detail_param"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="detail_comment"></detail-comment-info>
      <goods-list :goods="recommendInfo" ref="detail_recom"></goods-list>
    </scroll>
    <back-top @click="backClick" v-show="isShowBackTop"></back-top>
    <detail-bot-bar @add-cart="addCart"></detail-bot-bar>

  </div>
</template>

<script>

  import DetailNav from '@/components/content/details/DetailNav.vue'
  // import GoodsList from '@/components/content/goods/GoodsList.vue'
  import DetailSwiper from './detailcomp/DetailSwiper.vue'
  import DetailBaseInfo from './detailcomp/DetailBaseInfo.vue'
  import DetailShopInfo from './detailcomp/DetailShopInfo.vue'
  import DetailGoodsInfo from './detailcomp/DetailGoodsInfo.vue'
  import DetailParamInfo from './detailcomp/DetailParamInfo.vue'
  import DetailCommentInfo from './detailcomp/DetailCommentInfo.vue'
  import DetailBotBar from './detailcomp/DetailBotBar.vue'
  import GoodsList from './detailcomp/DetailGoodsList.vue'
  import { getGoodsDetail, getRecommend, Goods, Shop, Param } from '@/network/detail.js'

  import { debounce } from '@/common/utils.js'
  import { backTopMixin } from '@/common/mixin.js'
  import Scroll from '@/components/common/scroll/Scroll.vue'
  export default {
    name: 'GoodsDetail',
    mixins: [backTopMixin],
    components: {
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBotBar
    },
    data() {
      return {
        iid: this.$route.query.id,
        topImg: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommendInfo: [],
        topY: [],
        getTopY: null,
        lessRefresh: null
      }
    },
    methods: {
      addCart() {
        const product = {}
        product.image = this.topImg[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.lowNowPrice
        product.iid = this.iid
        this.$store.dispatch('addCart', product).then(res => { console.log(res) })
      },
      imgLoad() {
        this.lessRefresh()
        this.getTopY()
        // console.log(this.navY);
      },
      titleClick(index) {
        console.log(index);
        this.$refs.scroll.scroll.scrollTo(0, -this.topY[index], 500)
      },

      contentScroll(position) {
        const y = -position.y
        for (let i in this.topY) {
          let x = parseInt(i)
          if (y >= this.topY[x] && y < this.topY[x + 1]) {
            this.$refs.detail_nav.currentIndex = x
          }
        }
        this.MixGoBackTop(position)
      },
    },
    created() {
      this.iid = this.$route.query.id
      getGoodsDetail(this.iid).then(res => {
        // console.log(res);
        this.topImg = res.itemInfo.topImages
        // console.log(this.topImg);
        //1. 商品详情
        this.goods = new Goods(res.itemInfo, res.columns, res.shopInfo)
        //2. 商家详情
        this.shop = new Shop(res.shopInfo)
        //3. 获取商品详细信息
        this.detailInfo = res.detailInfo
        //4. 获取参数信息
        this.paramInfo = new Param(res.itemParams.info, res.itemParams.rule)
        //5. 获取评论信息
        if (res.rate.cRate !== 0) {
          this.commentInfo = res.rate.list[0]
        }
      })
      getRecommend().then(res => {
        this.recommendInfo = res.list
      })
      this.getTopY = debounce(() => {
        this.topY = []
        this.topY.push(0)
        this.topY.push(this.$refs.detail_param.$el.offsetTop)
        this.topY.push(this.$refs.detail_comment.$el.offsetTop)
        this.topY.push(this.$refs.detail_recom.$el.offsetTop)
        this.topY.push(Number.MAX_VALUE)
      }, 500)
      this.lessRefresh = debounce(() => {
        this.$refs.scroll.refresh()
      }, 500)
    },
  }
</script>
<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .item_img {
    height: 200px;
    width: 50px;
  }

  .detail_nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: 85vh;
  }
</style>