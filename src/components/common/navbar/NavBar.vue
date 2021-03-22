<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  .navbar {
    display: flex;
    font-weight: 700;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    box-shadow: 0 1px 2px rgb(236, 236, 236);
  }

  .left,
  .right {
    width: 4rem;
  }

  .center {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>