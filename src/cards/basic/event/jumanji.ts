import type { EventCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";
import { useOperate } from "@/stores/use_operate";
import BoardGame from "@/cards/basic/prop/board_game";

const store = useOperate();
const { onIsHave } = store;

const CleanUp: EventCardType = {
  id: `${ExEnum.BASIC}-${TypeEnum.EVENT}-4`,
  ex: ExEnum.BASIC,
  name: "勇敢者的游戏",
  illustration: "",
  content: "",
  type: TypeEnum.EVENT,
  tag: [],
  phase: 2,
  play: () => {
    if (onIsHave({ id: BoardGame.id })) {
    } else {
    }
  },
};

export default CleanUp;
