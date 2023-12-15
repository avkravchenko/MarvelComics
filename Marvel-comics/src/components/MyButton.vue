<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.my-button {
  background-color: rgb(0, 132, 255);
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  border: none;
  padding: 15px;
}
</style>
