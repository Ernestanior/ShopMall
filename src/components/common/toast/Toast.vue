<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        message: '添加商品',
        isShow: true
      }
    },
    methods: {
      show(message = "默认商品", duration = 1000) {
        this.message = message
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
        }, duration)
      }
    },
  }
</script>

<style scoped>
  .toast {
    padding: 10px;
    border-radius: 5px;
    position: fixed;
    color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .6);
    z-index: 999;
  }
</style>