<template>
  <view
    style="
      background-color: white;
      margin: 16rpx 32rpx 0 32rpx;
      padding: 16rpx;
      font-size: 28rpx;
      line-height: 36rpx;
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
