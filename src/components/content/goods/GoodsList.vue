<template>
  <div class="goodslist">
    <div v-for="item in goods" class="goods_item" @click="HandleItemClick(item)">
      <img :src="item.show.img" alt="" class="goods_img" @load="HandleLoad">
      <span class="goods_title">{{item.props[0]}}</span>
      <div class="goods_msg">
        <span class="goods_price">{{item.price}}</span>
        <span class="goods_sale">{{item.sale}}</span>
      </div>
    </div>
  </div>
  <!-- <button @click="btnclick">123</button> -->
</template>

<script>
  export default {
    name: 'GoodsList',
    props: {
      goods: {
        type: Array,
        Default() {
          return []
        }
      }
    },
    computed: {
    },
    methods: {
      HandleLoad() {
        this.$emit('handleLoad')
      },
      HandleItemClick(item, e) {
        this.$router.push({
          path: '/detail',
          query: {
            id: item.iid
          }
        })
      }
    },
  }
</script>
<style scoped>
  .goodslist {
    display: flex;
    flex-wrap: wrap;
  }

  .goods_item {
    flex: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    background-color: #fff;
  }

  .goods_item .goods_title {
    width: 49vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }

  .goods_msg {
    margin-bottom: 3px;
  }

  .goods_price {
    color: #1653c4;
    margin-right: 10px;
  }

  .goods_img {
    width: 49vw;
    margin-bottom: 3px;
    border-radius: 5px;
  }
</style>