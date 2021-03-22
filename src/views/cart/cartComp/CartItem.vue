<template>
  <div class="scroll_content">
    <scroll class="content" ref="scroll">
      <div v-for="item in $store.state.cartList" class="item_box">
        <div class="check_box">
          <input type="checkbox" class="check" :class="{checked:item.checked}" @click="checkClick(item)">
        </div>
        <img :src="item.image" alt="">
        <div class="item_content">
          <span class="item_title">{{item.title}}</span>
          <span class="item_desc">{{item.desc}}</span>
          <div class="item_number">
            <span class="item_price">￥{{item.price}}</span>
            <span class="item_count">x{{item.count}}</span>
          </div>
        </div>
      </div>
    </scroll>
  </div>



</template>

<script>
  import Scroll from '@/components/common/scroll/Scroll.vue'
  export default {
    name: 'CartItem',
    components: {
      Scroll
    },
    activated() {
      // console.log("fresh");
      this.$refs.scroll.refresh()
    },
    methods: {
      checkClick(item) {
        item.checked = !item.checked
        this.$emit('checkClick')
      }
    }
  }
</script>

<style scoped>
  .scroll_content {
    height: 77vh;
  }

  .content {
    height: 100%;
    overflow: hidden;
  }

  .item_box {
    display: flex;
    background-color: #fff;
    border-bottom: 1px solid rgb(214, 214, 214);
    padding: 10px;
    justify-content: center;
    align-items: center;
  }

  /* .check_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */

  .check {
    width: 15px;
    height: 15px;
    /* overflow: hidden;*/
    border-radius: 100%;
    border: 1px solid #a1a1a1;
    margin-right: 7px;
  }

  .checked {
    background-color: #1653c4;
    border: 1px solid #1653c4;
  }

  .item_box img {
    height: 80px;
    width: 60px;
    border-radius: 5px;
  }

  .item_content {
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
  }

  .item_title,
  .item_desc {
    flex: 2;
    width: 70vw;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .item_title {
    color: #000;
  }

  .item_desc {
    font-size: 10px;
  }

  .item_number {
    flex: 3;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .item_price {
    color: orange;
  }
</style>