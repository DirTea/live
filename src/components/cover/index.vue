<template>
  <view style="display: flex;justify-content: center;align-content:center;width: 6rem; height: 6rem;background: #f1f1f1">
    <image :src="src" style="width: 100%;height: 100%" mode="aspectFit"></image>
  </view>
</template>

<script setup lang="ts">
const { src } = defineProps<{ src: string }>();

</script>

<style scoped>

</style>