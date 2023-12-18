<template>
  <div class="loader-wrapper">
    <div class="loader">
      <div class="dot"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.loader-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: #fff;

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: #e4e4e4;
    border-radius: 5px;

    .dot {
      width: 55px;
      height: 55px;
      border: solid 5px #e4e4e4;
      border-top: solid 5px #5f5f5f;
      border-left: solid 5px #5f5f5f;
      border-radius: 50%;
      animation: rotate 2s linear infinite;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
