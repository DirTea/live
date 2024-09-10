import type { EventCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";
import { useOperate } from "@/stores/use_operate";
import OverdueLottery from "@/cards/basic/prop/overdue_lottery";
import { storeToRefs } from "pinia";

const store = useOperate();
const { testIsConfirm, useIsConfirm } = storeToRefs(store);
const {
  onStart,
  onWait,
  onTest,
  onTestResolution,
  onUse,
  onUseResolution,
  onModel,
} = store;

const TimeTraveller: EventCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.EVENT}-8`,
  ex: ExEnum.BASIC,
  name: "时间旅行者",
  illustration: "",
  content:
    "他并不是从什么绿色的洞、黄色的门、蓝色的电话亭或者旋转的粒子光效中出来的，而是凭空就站在那儿了",
  type: TypeEnum.EVENT,
  tag: [],
  phase: 3,
  play: () => {
    onUse({ id: OverdueLottery.id });
    onWait(useIsConfirm, () => {
      onUseResolution((useVal: string) => {
        if (useVal) {
          if (useVal === OverdueLottery.id) {
            onStart(() => {
              onTest();
              console.log(38);
              onWait(testIsConfirm, () => {
                console.log(62);
                onTestResolution((val: number) => {
                  if (val <= 19) {
                    onModel([
                      {
                        type: "text",
                        text: "他摇了摇头，并没有说什么",
                      },
                    ]);
                  } else if (val === 20) {
                    onModel([
                      {
                        type: "text",
                        text: "500w胜利",
                      },
                    ]);
                  }
                });
              });
            });
          }
        } else {
          onModel([
            {
              type: "text",
              text: "他突然就消失了，就像是从来没有出现过",
            },
          ]);
        }
      });
    });
  },
};

export default TimeTraveller;
