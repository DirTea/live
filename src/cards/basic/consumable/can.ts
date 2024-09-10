import type { ConsumableCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";

const Can: ConsumableCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.CONSUMABLE}-1`,
  ex: ExEnum.BASIC,
  name: "一个罐头",
  illustration: "",
  content: "",
  type: TypeEnum.CONSUMABLE,
  tag: [],
  icon: "/src/static/icon/can.svg",
};

export default Can;
