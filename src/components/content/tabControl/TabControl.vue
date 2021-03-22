<template>
  <div class="tc_container">
    <div class="tabcontrol" v-for="(item,index) in titles" @click="tabClick(index)">
      <span :class="{active: index === currentIndex}">{{item}}</span>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      titles: {
        type: Array,
        default() {
          return []
        },
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabClick(index) {
        this.currentIndex = index,
          this.$emit('tabControl', index)
      }
    },
  }
</script>

<style scoped>
  .tc_container {
    display: flex;
    width: 100vw;
    padding: 7px 0;
    background-color: #fff;
    font-weight: 500;
    box-shadow: 0 1px 2px rgb(236, 236, 236);
  }

  .tc_container>div {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .tc_container>div>span {
    padding: 3px 2px;

  }

  .active {
    /* border-bottom: 2px solid #666; */
    color: #1653c4;
    border-bottom: 3px solid#1653c4;
  }
</style>