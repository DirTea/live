import type { ConsumableCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";

const Water: ConsumableCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.CONSUMABLE}-2`,
  ex: ExEnum.BASIC,
  name: "一瓶水",
  illustration: "",
  content: "水是剧毒的",
  type: TypeEnum.CONSUMABLE,
  tag: [],
  icon: "/src/static/icon/can.svg",
};

export default Water;
