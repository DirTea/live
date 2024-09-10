import type {
  AllCardType,
  ConsumableCardType,
  EventCardType,
  PropCardType,
  StateCardType,
  WeaknessCardType,
} from "@/cards/card_type";

// 基础-消耗全卡
export let basicConsumableList: ConsumableCardType[] = [];
// 基础-事件全卡
export let basicEventList: EventCardType[] = [];
// 基础-道具全卡
export let basicPropList: PropCardType[] = [];
// 基础-状态全卡
export let basicStateList: StateCardType[] = [];
// 基础-弱点全卡
export let basicWeaknessList: WeaknessCardType[] = [];
// 基础全卡
export let basicList: AllCardType[] = [];

// 全卡
export let allList: AllCardType[] = [];
// // 消耗全卡
// export const consumableMap: ConsumableCardType[] = [...basicConsumableList];
// // 事件全卡
// export const eventMap: EventCardType[] = [...basicEventList];
// // 道具全卡
// export const propMap: PropCardType[] = [...basicPropList];
// // 状态全卡
// export const stateMap: StateCardType[] = [...basicStateList];
// // 弱点全卡
// export const weaknessMap: WeaknessCardType[] = [...basicWeaknessList];
