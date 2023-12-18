<template>
  <div class="modal">
    <slot></slot>
    <button @click="setModal" class="exit">✕</button>
  </div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["setModal"]),
  },
};
</script>

<style lang="scss" scoped>
.modal {
  border-radius: 10px;
  display: flex;
  gap: 20px;
  align-items: center;
  position: fixed;
  top: 10px;
  left: 10px;
  right: 10px;
  padding: 20px;
  background-color: #f5f4f4;

  .exit {
    all: unset;
    background-color: #fff;
    border-radius: 50%;
    padding: 3px 9px;
  }
}
</style>
