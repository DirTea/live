import { ref } from "vue";
import type { EventCardType } from "@/cards/card_type";
import { cache } from "@/utils/cache";
import { getCards } from "@/utils/card";

// 当前卡牌
const card = ref<EventCardType>();
// 是否翻开
const isFlip = ref<boolean>(false);
// 能否翻牌
const canFlip = ref<boolean>(true);
// 牌库
const cardList = ref<string[]>([]);
// 抽牌历史记录
const history = ref<string[]>([]);
export const useCard = () => {
  // 初始化
  const init = () => {
    isFlip.value = false;
    canFlip.value = true;
    cardList.value = cache.get("settings_cardList");
    history.value = cache.get("settings_history");
    onDuel();
  };

  // 抽牌
  const onDuel = () => {
    if (cardList.value.length > 0) {
      if (card.value?.id === cardList.value[0]) {
        return;
      }
      isFlip.value = false;
      canFlip.value = true;
      card.value = getCards(
        { id: cardList.value[0] },
        "card",
      )[0] as EventCardType;
    } else {
      card.value = undefined;
      uni.showToast({
        title: "抽完了",
        duration: 1000,
        icon: "error",
      });
    }
  };
  // 翻开牌
  const onFlip = () => {
    if (cardList.value.length > 0) {
      history.value.unshift(cardList.value.shift()!);
      cache.set("settings_cardList", cardList.value);
      cache.set("settings_history", history.value);
      canFlip.value = false;
    }
  };
  // 查看历史记录
  const onView = () => {
    // todo
  };
  return {
    card,
    isFlip,
    canFlip,
    history,
    init,
    onDuel,
    onFlip,
    onView,
  };
};
