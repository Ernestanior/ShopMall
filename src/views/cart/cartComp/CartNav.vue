<template>
  <nav-bar class="cart_nav">
    <!-- <template #left>
      <div>
        <div class="back" @click="goBack">
          <img src="@/assets/icon/youla.png" alt="">
        </div>
      </div>
    </template> -->

    <template #center>
      <div>
        购物车({{$store.state.cartList.length}})
      </div>
    </template>
  </nav-bar>

</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'

  export default {
    name: 'CartNav',
    components: {
      NavBar
    },
    methods: {
      // goBack() {
      //   this.$router.back()
      // }
    }
  }

</script>

<style scoped>
  .cart_nav {
    background-color: #1653c4;
    color: #fff;
  }


  .back {
    padding: 10px 10px 0 0;
  }

  .back>img {
    width: 30px;
    transform: rotate(90deg);
  }
</style>