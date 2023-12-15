<template>
  <header class="header">
    <div class="logo">marvel</div>
    <div class="cart">🛒</div>
  </header>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  .logo {
    font-weight: 800;
    font-size: 2rem;
    text-transform: uppercase;
    color: #fff;
    background-color: rgb(255, 40, 40);
    padding: 5px 10px;
  }

  .cart {
    background-color: #fff;
    padding: 10px;
    border-radius: 50%;
  }
}
</style>
