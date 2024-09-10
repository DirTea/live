import Can from "@/cards/basic/consumable/can";
import Aid from "@/cards/basic/event/aid";
import Water from "@/cards/basic/consumable/water";
import BoxOfMystery from "@/cards/basic/event/box_of_mystery";
import CleanUp from "@/cards/basic/event/clean_up";
import RadioresistanceExperiment from "@/cards/basic/event/radioresistance_experiment";
import TheLatestAnnouncement from "@/cards/basic/event/the_latest_announcement";
import TimeTraveller from "@/cards/basic/event/time_traveller";
import {
  allList,
  basicConsumableList,
  basicEventList,
  basicList,
  basicPropList,
  basicStateList,
} from "@/cards";
import FourLeafClover from "@/cards/basic/prop/four_leaf_clover";
import OverdueLottery from "@/cards/basic/prop/overdue_lottery";
import Anarchism from "@/cards/basic/state/anarchism";
import WasteTime from "@/cards/basic/state/waste_time";
import Jumanji from "@/cards/basic/event/jumanji";
import BoardGame from "@/cards/basic/prop/board_game";
import Radaway from "@/cards/basic/prop/radaway";
import Radio from "@/cards/basic/prop/radio";

let isLoad = false;
export const useLoad = () => {
  const onLoad = () => {
    if (!isLoad) {
      basicConsumableList.push(Can, Water);
      basicEventList.push(
        Aid,
        BoxOfMystery,
        CleanUp,
        Jumanji,
        RadioresistanceExperiment,
        TheLatestAnnouncement,
        TimeTraveller,
      );
      basicPropList.push(
        BoardGame,
        FourLeafClover,
        OverdueLottery,
        Radaway,
        Radio,
      );
      basicStateList.push(Anarchism, WasteTime);
      basicList.push(
        ...basicConsumableList,
        ...basicEventList,
        ...basicPropList,
        ...basicStateList,
      );
      allList.push(...basicList);
    }
    isLoad = true;
  };
  return {
    onLoad,
  };
};
