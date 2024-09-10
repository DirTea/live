import type { PropCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";

const BoardGame: PropCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.PROP}-1`,
  ex: ExEnum.BASIC,
  name: "桌游",
  illustration: "",
  content: "",
  type: TypeEnum.PROP,
  tag: [],
  isOnStart: true,
};

export default BoardGame;
