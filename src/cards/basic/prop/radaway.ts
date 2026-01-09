import type { PropCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";

const Radaway: PropCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.PROP}-3`,
  ex: ExEnum.BASIC,
  name: "消辐宁",
  illustration: "",
  content: "",
  type: TypeEnum.PROP,
  tag: [],
  isOnStart: false,
};

export default Radaway;
