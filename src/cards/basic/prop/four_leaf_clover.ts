import type { PropCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";

const FourLeafClover: PropCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.PROP}-2`,
  ex: ExEnum.BASIC,
  name: "四叶草",
  illustration: "",
  content: "",
  type: TypeEnum.PROP,
  tag: [],
  isOnStart: true,
};

export default FourLeafClover;
