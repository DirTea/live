// 卡牌类型
export enum TypeEnum {
  /**
   * 消耗
   * 非卡牌，改用token标记，使用后丢弃
   */
  CONSUMABLE = "consumable",
  /**
   * 事件
   * 每回合每名玩家依次抽一张
   */
  EVENT = "event",
  /**
   * 道具
   * 每局游戏每名玩家抽五选三
   */
  PROP = "prop",
  /**
   * 状态
   * 指定获得时，找出并置于面前
   */
  STATE = "state",
  /**
   * 弱点
   * 每局游戏开始抽一张
   */
  WEAKNESS = "weakness",
}
