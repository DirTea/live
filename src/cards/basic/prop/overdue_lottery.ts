import type { PropCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";

const OverdueLottery: PropCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.PROP}-3`,
  ex: ExEnum.BASIC,
  name: "过期彩票",
  illustration: "",
  content: "",
  type: TypeEnum.PROP,
  tag: [],
  isOnStart: false,
};

export default OverdueLottery;
