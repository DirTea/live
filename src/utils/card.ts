import _shuffle from "lodash/shuffle";
import type { AllCardType, GetCardsParamsType } from "@/cards/card_type";
import Fuse from "fuse.js";
import { allList } from "@/cards";

/**
 * 根据卡牌编号查询卡牌
 * @param params { id, ex, name, type, tag }
 * @param type 需要的返回类型，"card"或"id"
 * @param list 需要查找的范围，默认为全卡
 */
export function getCards(
  params: GetCardsParamsType,
  type: "card",
  list?: AllCardType[],
): AllCardType[];
export function getCards(
  params: GetCardsParamsType,
  type: "id",
  list?: AllCardType[],
): string[];
export function getCards(
  params: GetCardsParamsType,
  type: any,
  list?: AllCardType[],
): any {
  let searchList = list ? list : allList;
  let cardSet: Set<AllCardType | string> = new Set();
  function search(prop: "id" | "ex" | "type") {
    searchList.forEach((card: AllCardType) => {
      if (Array.isArray(params[prop])) {
        if (params[prop]!.indexOf(card[prop]) !== -1) {
          if (type === "card") {
            cardSet.add(card);
          }
          if (type === "id") {
            cardSet.add(card.id);
          }
        }
      } else {
        if (params[prop] === card[prop]) {
          if (type === "card") {
            cardSet.add(card);
          }
          if (type === "id") {
            cardSet.add(card.id);
          }
        }
      }
    });
  }
  if (params.id) {
    search("id");
  }
  if (params.ex) {
    search("ex");
  }
  if (params.name) {
    const fuse = new Fuse(searchList, { keys: ["name"] });
    if (Array.isArray(params.name)) {
      params.name.forEach((item) => {
        fuse.search(item).forEach((item1) => {
          if (type === "card") {
            cardSet.add(item1.item as AllCardType);
          }
          if (type === "id") {
            cardSet.add(item1.item.id);
          }
        });
      });
    } else {
      fuse.search(params.name).forEach((item) => {
        if (type === "card") {
          cardSet.add(item.item as AllCardType);
        }
        if (type === "id") {
          cardSet.add(item.item.id);
        }
      });
    }
  }
  if (params.type) {
    search("type");
  }
  if (params.tag) {
    const fuse = new Fuse(searchList, { keys: ["tag"], threshold: 0 });
    if (Array.isArray(params.tag)) {
      params.tag.forEach((item) => {
        fuse.search(item).forEach((item1) => {
          if (type === "card") {
            cardSet.add(item1.item as AllCardType);
          }
          if (type === "id") {
            cardSet.add(item1.item.id);
          }
        });
      });
    } else {
      fuse.search(params.tag).forEach((item) => {
        if (type === "card") {
          cardSet.add(item.item as AllCardType);
        }
        if (type === "id") {
          cardSet.add(item.item.id);
        }
      });
    }
  }
  return [...cardSet];
}

// 洗牌
export function shuffle<T>(list: T[]): T[] {
  return _shuffle(list);
}
