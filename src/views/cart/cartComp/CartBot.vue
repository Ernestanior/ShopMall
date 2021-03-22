<template>
  <div class="bot_box">
    <div>
      <input type="checkbox" class="check" :class="{checked:isAllChecked}" @click="checkClick">全选
    </div>
    <div>合计:￥{{total.price}}</div>
    <div class="calc" @click="calc">去计算({{total.num_check}})</div>
  </div>
</template>

<script>
  export default {
    name: 'CartBot',
    data() {
      return {
        // totalPrice: 0
      }
    },
    props: {
      isAllChecked: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      checkClick() {
        this.$emit('AllChecked')
        for (let i of this.$store.state.cartList) {
          i.checked = !this.isAllChecked
        }
      },
      calc() {
        console.log(this.$toast);
      }
    },

    computed: {
      total() {
        let price = 0
        let num_check = 0
        for (let i of this.$store.state.cartList) {
          if (i.checked) {
            price += (parseFloat(i.price) * parseFloat(i.count));
            num_check++;
          }
        }
        price = price.toFixed(2)
        return { price, num_check }
      }
    }
  }
</script>

<style scoped>
  .bot_box {
    width: 100vw;
    height: 41px;
    position: relative;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bot_box div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .calc {
    height: 100%;
    background-color: rgb(250, 60, 60);
    color: #fff
  }

  .check {
    width: 15px;
    height: 15px;
    /* overflow: hidden;*/
    border: 1px solid #a1a1a1;
    margin-right: 7px;
  }

  .checked {
    background-color: #1653c4;
    border: 1px solid #1653c4;
  }
</style>