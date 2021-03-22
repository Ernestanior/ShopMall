<template>
  <cart-nav></cart-nav>
  <cart-item @checkClick="checkClick"></cart-item>
  <!-- <toast></toast> -->
  <cart-bot class="bot" :is-all-checked="isAllChecked" @AllChecked="AllCheck"></cart-bot>
</template>

<script>
  import CartNav from './cartComp/CartNav.vue'
  import CartItem from './cartComp/CartItem.vue'
  import CartBot from './cartComp/CartBot.vue'

  // import Toast from '@/components/common/toast/Toast.vue'
  export default {
    name: 'Cart',
    components: {
      CartNav,
      CartItem,
      CartBot
    },
    data() {
      return {
        isAllChecked: true
      }
    },
    activated() {
      if (this.$store.state.cartList.length == 0) {
        this.isAllChecked = false
      }
      else {
        this.isAllChecked = true
      }
    },
    methods: {
      AllCheck() {
        this.isAllChecked = !this.isAllChecked
      },
      checkClick(item) {
        // const check = this.$store.state.cartList.filter((i) => {
        //   return i.checked == false
        // })
        // if (check.length != 0) {
        //   this.isAllChecked = false
        // }
        // else {
        //   this.isAllChecked = true
        // }
        this.isAllChecked = !(this.$store.state.cartList.find(item => !item.checked))
      }
    },
  }
</script>

<style scoped>

</style>