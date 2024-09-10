import type { EventCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";
import { TagEnum } from "@/enums/tag_enum";
import { useOperate } from "@/stores/use_operate";
import { storeToRefs } from "pinia";

const store = useOperate();
const { chooseIsConfirm } = storeToRefs(store);
const { onWait, onChoose, onChooseResolution } = store;

const RadioresistanceExperiment: EventCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.EVENT}-6`,
  ex: ExEnum.BASIC,
  name: "防辐实验",
  illustration: "",
  content: "",
  type: TypeEnum.EVENT,
  tag: [TagEnum.GOVERNMENT],
  phase: 2,
  play: () => {
    onChoose(["同意", "拒绝"]);
    onWait(chooseIsConfirm, () => {
      onChooseResolution((val: string) => {
        if (val === "同意") {
        } else if (val === "拒绝") {
        }
      });
    });
  },
};

export default RadioresistanceExperiment;
