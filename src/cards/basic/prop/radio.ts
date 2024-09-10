import type { PropCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";

const Radio: PropCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.PROP}-5`,
  ex: ExEnum.BASIC,
  name: "收音机",
  illustration: "",
  content: "",
  type: TypeEnum.PROP,
  tag: [],
  isOnStart: true,
};

export default Radio;
