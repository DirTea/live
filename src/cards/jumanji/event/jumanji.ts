import type { EventCardType } from "@/cards/card_type";
import { ExEnum } from "@/enums/ex_enum";
import { TypeEnum } from "@/enums/type_enum";
import { useOperate } from "@/stores/use_operate";
import BoardGame from "@/cards/basic/prop/board_game";

const store = useOperate();
const { onIsHave } = store;

const Jumanji: EventCardType = {
  id: `${ExEnum.JUMANJI}-${TypeEnum.EVENT}-1`,
  ex: ExEnum.JUMANJI,
  name: "勇敢者的游戏",
  illustration: "",
  content: "",
  type: TypeEnum.EVENT,
  tag: [],
  phase: 2,
  play: () => {
    if (onIsHave({ id: BoardGame.id })) {
      // 将当前事件牌堆变为“勇敢者的游戏”牌堆
    } else {
    }
  },
};

export default Jumanji;
