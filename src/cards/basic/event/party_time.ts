import type { EventCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";
import { useOperate } from "@/stores/use_operate";
import { storeToRefs } from "pinia";
import BoardGame from "@/cards/basic/prop/board_game";

const store = useOperate();
const { useIsConfirm } = storeToRefs(store);
const { onWait, onUse } = store;

const PartyTime: EventCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.EVENT}-5`,
  ex: ExEnum.BASIC,
  name: "派对时间",
  illustration: "",
  content: "",
  type: TypeEnum.EVENT,
  tag: [],
  phase: 2,
  play: () => {
    onUse({ id: BoardGame.id });
    onWait(useIsConfirm, (useVal: string) => {
      if (useVal) {
        if (useVal === BoardGame.id) {
        }
      }
    });
  },
};

export default PartyTime;
