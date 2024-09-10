<template>
  <view class="container">
    <view class="flex" style="align-items: baseline">
      <view style="font-size: 12px">存活</view>
      <view style="font-size: 48px; font-weight: bold">{{ round }}</view>
      <view style="font-size: 12px">轮数</view>
    </view>
    <Card
      v-if="card && cache.get('settings_checks').indexOf('isEventDuel') !== -1"
      v-model="isFlip"
      :card="card"
      @on-flip="onFlip"
      :can-flip="canFlip"
      height="123.2vw"
      width="88.2vw"
      :duration="isFlip ? 1000 : 0"
      trigger="click"
    />
    <div class="operation">
      <up-button text="抽牌" type="primary" @click="onDuel"></up-button>
    </div>
    <div class="history">
      <div>历史记录</div>
      <div class="history-container">
        <div v-for="(item, index) in history" @click="onView" :key="index">
          {{ getCard(item).name }}
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import Card from "@/components/Card.vue";
import { useCard } from "@/hooks/use_card";
import { cache } from "@/utils/cache";
import { computed } from "vue";
import { useLoad } from "@/hooks/use_load";
import { getCards } from "@/utils/card";

const { onLoad } = useLoad();
onLoad();

const { card, isFlip, canFlip, history, init, onDuel, onFlip, onView } =
  useCard();
init();

const round = computed(() => {
  return Math.floor(history.value.length / cache.get("settings_people") + 1);
});

const getCard = computed(() => (id: string) => {
  return getCards({ id: id }, "card")[0];
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.operation {
  display: flex;
  margin-top: 20px;
  width: 100%;
}
.history {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 10px;
  width: 100%;
}
.history-container {
  display: flex;
  gap: 10px;
  overflow-y: scroll;
  white-space: nowrap;
}
.history-container::-webkit-scrollbar {
  display: none;
}
</style>
