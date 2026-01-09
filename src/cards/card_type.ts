// 基础卡牌类
import { TypeEnum } from "@/enums/type_enum";

interface CardType {
  // 卡牌ID
  id: string;
  // 隶属于哪个扩展
  ex: string;
  // 卡牌名
  name: string;
  // 插图
  illustration: string;
  // 卡牌文字描述
  content: string;
  // 卡牌类型
  type: string;
  // 卡牌标签
  tag: string[];
}

// 消耗卡牌类
export interface ConsumableCardType extends CardType {
  // 小图标
  icon: string;
}
export function isConsumableCardType(obj: any): obj is ConsumableCardType {
  return obj.type === TypeEnum.CONSUMABLE;
}

// 事件卡牌类
export interface EventCardType extends CardType {
  // 阶段
  phase: number;
  // 结算
  play: Function;
}
export function isEventCardType(obj: any): obj is EventCardType {
  return obj.type === TypeEnum.EVENT;
}

// 发现卡牌类
export interface FindCardType extends CardType {}
export function isFindCardType(obj: any): obj is PropCardType {
  return obj.type === TypeEnum.FIND;
}

// 道具卡牌类
export interface PropCardType extends CardType {
  // 是否为开局可获取的道具
  isOnStart: boolean;
}
export function isPropCardType(obj: any): obj is PropCardType {
  return obj.type === TypeEnum.PROP;
}

// 状态卡牌类
export interface StateCardType extends CardType {}
export function isStateCardType(obj: any): obj is StateCardType {
  return obj.type === TypeEnum.STATE;
}

// 弱点卡牌类
export interface WeaknessCardType extends CardType {}
export function isWeaknessCardType(obj: any): obj is WeaknessCardType {
  return obj.type === TypeEnum.WEAKNESS;
}

// 全部卡牌类
export type AllCardType =
  | ConsumableCardType
  | EventCardType
  | FindCardType
  | PropCardType
  | StateCardType
  | WeaknessCardType;

// 拥有卡牌类
export interface HaveCardType {
  cardId: string;
  cardNum: number;
}

// 查询卡牌参数类
export interface GetCardsParamsType {
  id?: string | string[];
  ex?: string | string[];
  name?: string | string[];
  type?: string | string[];
  tag?: string | string[];
}
