<template>
  <MyHeader />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyHeader from "@/components/MyHeader.vue";

export default defineComponent({ components: { MyHeader } });
</script>

<style lang="scss" scoped></style>
