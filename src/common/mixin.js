import BackTop from './../components/common/backtop/BackTop.vue'
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 1000)
    },
    MixGoBackTop(position) {
      this.isShowBackTop = position.y < -1000 ? true : false
    }
  },
}