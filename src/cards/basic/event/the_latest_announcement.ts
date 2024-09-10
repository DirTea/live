import type { EventCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";
import { TagEnum } from "@/enums/tag_enum";

const TheLatestAnnouncement: EventCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.EVENT}-7`,
  ex: ExEnum.BASIC,
  name: "最新公告",
  illustration: "",
  content: "",
  type: TypeEnum.EVENT,
  tag: [TagEnum.GOVERNMENT],
  phase: 3,
  play: () => {},

  // todo
  // 需要收音机
};

export default TheLatestAnnouncement;
