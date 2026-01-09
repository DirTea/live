import type { FindCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";

const OverdueLottery: FindCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.FIND}-1`,
  ex: ExEnum.BASIC,
  name: "过期彩票",
  illustration: "",
  content: "",
  type: TypeEnum.FIND,
  tag: [],
};

export default OverdueLottery;
