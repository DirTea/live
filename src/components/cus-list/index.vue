<template>
  <view style="margin-top: 0.5rem;display: flex; flex-direction: column; gap: 0.5rem">
    <div v-for="(item, index) in list" :key="index">
      <slot :item="item.item" name="item"></slot>
    </div>
  </view>
</template>

<script lang="ts" setup>
const { list } = defineProps<{ list: any[] }>();
</script>

<style scoped></style>
