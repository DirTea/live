import type { EventCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";
import { useOperate } from "@/stores/use_operate";
import Can from "@/cards/basic/consumable/can";
import Water from "@/cards/basic/consumable/water";
import OverdueLottery from "@/cards/basic/prop/overdue_lottery";
import _random from "lodash/random";
import { basicPropList } from "@/cards";
import BoardGame from "@/cards/basic/prop/board_game";
import { storeToRefs } from "pinia";

const store = useOperate();
const { testIsConfirm } = storeToRefs(store);
const { onWait, onTest, onTestResolution, onGain, onGains, onModel } = store;

const BoxOfMystery: EventCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.EVENT}-2`,
  ex: ExEnum.BASIC,
  name: "神秘之盒",
  illustration: "",
  content: "",
  type: TypeEnum.EVENT,
  tag: [],
  phase: 1,
  play: () => {
    onTest();
    onWait(testIsConfirm, () => {
      onTestResolution((val: number) => {
        if (val === 1) {
          onModel([
            {
              type: "text",
              text: "空空如也，难道是“买椟还珠”？",
            },
          ]);
        } else if (val <= 5) {
          onGain(
            OverdueLottery,
            1,
            "里面是一张微微泛黄但保存完整的彩票，可惜的是开奖日期在数十年前，你脑海中出现的那一瞬间的发财梦就这么烟消云散了",
          );
        } else if (val <= 15) {
          onGains(
            new Map([
              [Can, 1],
              [Water, 1],
            ]),
            "里面是一些水和罐头，足以应付一些时间了",
          );
        } else if (val <= 19) {
          onGain(
            BoardGame,
            1,
            "里面是一盒桌游————八角尖尖————也许无聊的时候能开上一局",
          );
        } else if (val === 20) {
          onGain(
            basicPropList[_random(0, basicPropList.length - 1)],
            1,
            "随着一阵金光闪过",
          );
        }
      });
    });
  },
};

export default BoxOfMystery;
