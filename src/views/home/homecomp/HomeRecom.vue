<template>
  <div class="recom_container">
    <div class="recom_item" v-for="item in recommend">
      <a :href="item.link">
        <img class="recom_image" :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HomeRecomm',
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }

</script>
<style scoped>
  .recom_container {

    display: flex;
    background-color: #fff;
    padding: 10px 0;
  }

  .recom_item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .recom_item a {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }

  .recom_image {
    height: 48px;
    width: 48px;
    margin-bottom: 5px;

  }
</style>