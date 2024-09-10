import type { EventCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";
import { TagEnum } from "@/enums/tag_enum";
import { useOperate } from "@/stores/use_operate";
import Can from "@/cards/basic/consumable/can";
import Water from "@/cards/basic/consumable/water";
import { storeToRefs } from "pinia";

const store = useOperate();
const { testIsConfirm } = storeToRefs(store);
const { onWait, onTest, onTestResolution, onGains } = store;

const Aid: EventCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.EVENT}-1`,
  ex: ExEnum.BASIC,
  name: "物资发放",
  illustration: "",
  content: "值得庆幸的是，至少还有人在维持这个世界的秩序",
  type: TypeEnum.EVENT,
  tag: [TagEnum.GOVERNMENT],
  phase: 1,
  play: () => {
    onTest();
    onWait(testIsConfirm, () => {
      onTestResolution((val: number) => {
        if (val === 1) {
          onGains(
            new Map([
              [Can, 1],
              [Water, 1],
            ]),
          );
        } else if (val <= 10) {
          onGains(
            new Map([
              [Can, 2],
              [Water, 2],
            ]),
          );
        } else if (val <= 19) {
          onGains(
            new Map([
              [Can, 3],
              [Water, 3],
            ]),
          );
        } else if (val === 20) {
          onGains(
            new Map([
              [Can, 4],
              [Water, 4],
            ]),
          );
        }
      });
    });
  },
};

export default Aid;
