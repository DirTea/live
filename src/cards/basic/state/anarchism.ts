import type { StateCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";
import { TagEnum } from "@/enums/tag_enum";

const Anarchism: StateCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.STATE}-1`,
  ex: ExEnum.BASIC,
  name: "无政府主义",
  illustration: "",
  content: "",
  type: TypeEnum.STATE,
  tag: [TagEnum.THOUGHT],

  // todo
  //
};

export default Anarchism;
