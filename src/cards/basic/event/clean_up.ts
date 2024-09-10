import type { EventCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";
import { useOperate } from "@/stores/use_operate";
import { TagEnum } from "@/enums/tag_enum";
import { storeToRefs } from "pinia";

const store = useOperate();
const { testIsConfirm, useIsConfirm } = storeToRefs(store);
const { onWait, onTest, onTestResolution, onUse, onUseResolution } = store;

const CleanUp: EventCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.EVENT}-3`,
  ex: ExEnum.BASIC,
  name: "大扫除",
  illustration: "",
  content:
    "你不是洁癖或者强迫症患者，你只是想找件事情做不让自己无所事事，所以你打算搬开所有的床和柜子，来次畅快淋漓地大扫除",
  type: TypeEnum.EVENT,
  tag: [TagEnum.GOVERNMENT],
  phase: 2,
  play: () => {
    onTest();
    onWait(testIsConfirm, () => {
      onTestResolution((val: number) => {
        if (val === 1) {
          // 不小心打碎了一个 “易碎” 道具
          onUse({ tag: TagEnum.FRAGILE }, true);
          onWait(useIsConfirm, () => {
            onUseResolution(() => {});
          });
        } else if (val <= 10) {
          // 打扫的一尘不染，你的无聊值-1
        } else if (val <= 15) {
          // 发现了类似卵状物
        } else if (val <= 20) {
          // 发现了地下通道
        }
      });
    });
  },
};

export default CleanUp;
