<template>
  <view
    style="
      background-color: white;
      margin: 0.5rem 1rem 0 1rem;
      padding: 0.5rem 0.5rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      box-shadow: 0 0 20px 0 rgba(85, 137, 255, 0.2);
      border-radius: 10px;
    "
    @click="mClick"
  >
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
const emit = defineEmits(["click"]);
const mClick = () => {
  emit("click");
};
</script>

<style lang="scss" scoped></style>
