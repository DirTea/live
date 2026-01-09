import type { FindCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";

const Souterrain: FindCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.FIND}-2`,
  ex: ExEnum.BASIC,
  name: "地下通道",
  illustration: "",
  content: "",
  type: TypeEnum.FIND,
  tag: [],
};

export default Souterrain;
