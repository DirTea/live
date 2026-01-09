import type { ConsumableCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";

const Can: ConsumableCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.CONSUMABLE}-2`,
  ex: ExEnum.BASIC,
  name: "一个金币",
  illustration: "",
  content: "",
  type: TypeEnum.CONSUMABLE,
  tag: [],
  icon: "/src/static/icon/can.svg",
};

export default Can;
