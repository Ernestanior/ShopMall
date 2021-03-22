<template>
  <tab-bar>
    <tab-item path="/home" activeColor="#1653c4">
      <template v-slot:icon>
        <img src="@/assets/icon/tabbar_icon/home.png">
      </template>
      <template v-slot:icon_active>
        <img src="@/assets/icon/tabbar_icon/home_fill.png">
      </template>
      <div>首页</div>
    </tab-item>

    <tab-item path="/order" activeColor="#1653c4">
      <template v-slot:icon>
        <img src="@/assets/icon/tabbar_icon/order.png">
      </template>
      <template v-slot:icon_active>
        <img src="@/assets/icon/tabbar_icon/order_fill.png">
      </template>
      <div>订单</div>
    </tab-item>

    <tab-item path="/cart" activeColor="#1653c4">
      <template v-slot:icon>
        <img src="@/assets/icon/tabbar_icon/contact.png">
      </template>
      <template v-slot:icon_active>
        <img src="@/assets/icon/tabbar_icon/contact_fill.png">
      </template>
      <div>购物车</div>
    </tab-item>

    <tab-item path="/profile" activeColor="#1653c4">
      <template v-slot:icon>
        <img src="@/assets/icon/tabbar_icon/mine.png">
      </template>
      <template v-slot:icon_active>
        <img src="@/assets/icon/tabbar_icon/mine_fill.png">
      </template>
      <div>我的</div>
    </tab-item>
  </tab-bar>

</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar.vue'
  import TabItem from '@/components/common/tabbar/TabItem.vue'
  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabItem
    }
  }
</script>