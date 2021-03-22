<template>
  <div class="tab_item" @click="tabClick">
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="icon_active"></slot>
    </div>
    <div :style="ActiveStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TabItem',
    props: {
      path: {
        type: String,
        default: '/home'
      },
      activeColor: {
        type: String,
        default: "#1653c4"
      }
    },
    data() {
      return {
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      ActiveStyle() {
        return this.isActive ? { color: this.activeColor } : {}
      }
    },
    methods: {
      tabClick() {
        this.$router.replace(this.path);
        // console.log(this.$router.options.routes);
        // console.log(this.$route);
      }
    },
  }
</script>

<style>
  .active {
    color: #1653c4;
  }

  .tab_item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: .8rem;
    font-weight: 500;
  }

  .tab_item img {
    margin-top: .3rem;
    width: 1.92rem;
    height: 1.92rem;
  }
</style>