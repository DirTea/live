import type { HaveCardType } from "@/cards/card_type";

export const cache = {
  key: "live_",
  set(key: string, value: any, expire?: string) {
    key = this.getKey(key);
    let data: any = {
      expire: expire ? this.time() + expire : "",
      value,
    };

    if (typeof data === "object") {
      data = JSON.stringify(data);
    }
    try {
      uni.setStorageSync(key, data);
    } catch (e) {
      return undefined;
    }
  },
  get(key: string) {
    key = this.getKey(key);
    try {
      const data = uni.getStorageSync(key);
      if (!data) {
        return undefined;
      }
      const { value, expire } = JSON.parse(data);
      if (expire && expire < this.time()) {
        uni.removeStorageSync(key);
        return undefined;
      }
      return value;
    } catch (e) {
      return undefined;
    }
  },
  //获取当前时间
  time() {
    return Math.round(new Date().getTime() / 1000);
  },
  remove(key: string) {
    key = this.getKey(key);
    uni.removeStorageSync(key);
  },
  getKey(key: string) {
    return this.key + key;
  },
};

// 玩家拥有的卡牌
// 包括已获得的消耗卡，已装备的道具卡，以及弱点卡、状态卡等
export const have = {
  key: "have",
  /**
   * 缓存获得的卡牌
   * @param key 需要添加的卡牌编号
   * @param value 需要添加的数量
   */
  set(key: string, value: number) {
    let list = cache.get(this.key);
    if (list) {
      let flag = false;
      list.forEach((item: HaveCardType) => {
        if (item.cardId === key) {
          flag = true;
          item.cardNum += value;
        }
      });
      if (!flag) {
        list.push({
          cardId: key,
          cardNum: value,
        });
      }
      cache.set(this.key, list);
    } else {
      cache.set(this.key, [{ cardId: key, cardNum: value }]);
    }
  },
  /**
   * 减少使用的卡牌
   * @param key 需要使用的卡牌编号
   * @param value 需要减少的数量
   */
  use(key: string, value: number) {
    let list = cache.get(this.key);
    if (list) {
      for (let i = list.length - 1; i >= 0; i--) {
        if (list[i].cardId === key) {
          list[i].cardNum -= value;
          if (list[i].cardNum === 0) {
            list.splice(i, 1);
          }
        }
      }
      cache.set(this.key, list);
    }
  },
  /**
   * 获取拥有的某卡牌的数量
   * @param key 需要查找的卡牌编号
   * @return 拥有的张数
   */
  get(key: string): number {
    const list = cache.get(this.key);
    list.forEach((item: any) => {
      if (item.cardId === key) {
        return item.cardNum;
      }
    });
    return 0;
  },
  /**
   * 获取所有拥有的卡牌
   * @return 所有拥有的卡牌
   */
  getAll(): HaveCardType[] {
    return cache.get(this.key);
  },
  removeAll() {
    cache.remove(this.key);
  },
};
