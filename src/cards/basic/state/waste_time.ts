import type { StateCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";
import { TagEnum } from "@/enums/tag_enum";

const WasteTime: StateCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.STATE}-2`,
  ex: ExEnum.BASIC,
  name: "虚无主义",
  illustration: "",
  content: "",
  type: TypeEnum.STATE,
  tag: [TagEnum.THOUGHT],

  // todo
  // 检定值-10
};

export default WasteTime;
