import { type Ref, ref, watch } from "vue";
import { defineStore } from "pinia";
import _cloneDeep from "lodash/cloneDeep";
import { have } from "@/utils/cache";
import {
  type AllCardType,
  type ConsumableCardType,
  type GetCardsParamsType,
  isConsumableCardType,
  type PropCardType,
} from "@/cards/card_type";
import { getCards } from "@/utils/card";

export const useOperate = defineStore("operate", () => {
  // 检定弹出框是否显示
  const testShow = ref(false);
  // 检定值输入
  const testValue = ref<number | undefined>(undefined);
  // 检定是否已确认
  const testIsConfirm = ref(false);

  // 抉择弹出框是否显示
  const chooseShow = ref(false);
  // 抉择选项
  const chooseOptions = ref(<string[]>[]);
  // 抉择选中
  const chooseValue = ref("");
  // 抉择是否已确认
  const chooseIsConfirm = ref(false);

  // 使用弹出框是否显示
  const useShow = ref<boolean>(false);
  // 使用选项
  const useOptions = ref<AllCardType[]>([]);
  // 使用选中
  const useValue = ref<string>("");
  // 使用是否已确认
  const useIsConfirm = ref<boolean>(false);

  // 提示弹出框是否显示
  const modelShow = ref(false);
  // 提示文本
  const modelText = ref<Object[]>([]);
  // 提示是否已确认
  const modelIsConfirm = ref<boolean>(true);

  /**
   * 开始结算卡牌效果
   * 一般只在Card组件使用
   * @param func 需要继续执行的方法
   */
  const onStart = (func: Function) => {
    func();
  };

  /**
   * 等待某一个值
   * @param val 被等待的值
   * @param func 要继续执行的方法
   */
  const onWait = (val: Ref, func: Function) => {
    const w = watch(
      () => val,
      (v) => {
        if (v.value) {
          onStart(func);
          // 达成条件后注销自己
          w();
        }
      },
      {
        immediate: true,
      },
    );
  };

  /**
   * 开启一次检定
   */
  const onTest = () => {
    testShow.value = true;
  };
  /**
   * 此次检定在输入检定值后的确认按钮点击操作
   * 一般只在Card组件使用
   */
  const onTestConfirm = () => {
    if (!testValue.value) {
      uni.showToast({
        title: "请输入检定值",
        duration: 1000,
        icon: "error",
      });
      return;
    }
    if (testValue.value <= 0 || testValue.value > 20) {
      uni.showToast({
        title: "范围1-20",
        duration: 1000,
        icon: "error",
      });
      return;
    }
    testIsConfirm.value = true;
    testShow.value = false;
  };
  /**
   * 结算此次检定
   * @param func 回调方法，返回检定值
   */
  const onTestResolution = (func: Function) => {
    if (!testValue.value) {
      return;
    }
    func(Number(testValue.value));
    testIsConfirm.value = false;
    testValue.value = undefined;
  };

  /**
   * 开启一次抉择，从提供的选项中选择一项
   * @param val 选项数组
   */
  const onChoose = (val: string[]) => {
    chooseShow.value = true;
    chooseOptions.value = val;
  };
  /**
   * 此次抉择在选择一项后的确认按钮点击操作
   * 一般只在Card组件使用
   */
  const onChooseConfirm = () => {
    if (!chooseValue.value) {
      uni.showToast({
        title: "必须选择一项",
        duration: 1000,
        icon: "error",
      });
      return;
    }
    chooseIsConfirm.value = true;
    chooseShow.value = false;
  };
  /**
   * 结算此次抉择
   * @param func 回调方法，返回选择项
   */
  const onChooseResolution = (func: Function) => {
    if (!chooseValue.value) {
      return;
    }
    func(chooseValue.value);
    chooseValue.value = "";
    chooseOptions.value = [];
    chooseIsConfirm.value = false;
  };

  let _isForce: boolean = false;
  /**
   * 查找是否拥有符合查询条件的牌
   * @param params { id, ex, name, type, tag }
   * return 是否找到
   */
  const onIsHave = (params: GetCardsParamsType): boolean => {
    const list = have.getAll();
    if (list) {
      if (
        getCards(
          params,
          "card",
          getCards({ id: list.map((item) => item.cardId) }, "card"),
        ).length > 0
      ) {
        return true;
      }
    }
    return false;
  };
  /**
   * 开启一次使用
   * @param params { id, ex, name, type, tag } 会在已拥有的卡牌中查找
   * @param isForce 是否强制使用
   */
  const onUse = (params: GetCardsParamsType, isForce: boolean = false) => {
    const list = have.getAll();
    if (list) {
      useOptions.value = getCards(
        params,
        "card",
        getCards({ id: list.map((item) => item.cardId) }, "card"),
      );
    }
    _isForce = isForce;
    useShow.value = true;
  };
  /**
   * 此次使用在选择一项后的确认按钮点击操作
   * 一般只在Card组件使用
   */
  const onUseConfirm = () => {
    if (_isForce && !useValue.value) {
      uni.showToast({
        title: "必须选择一项",
        duration: 1000,
        icon: "error",
      });
      return;
    }
    useIsConfirm.value = true;
    useShow.value = false;
  };
  /**
   * 结算此次使用
   * @param func 回调方法，返回选择项
   * @param isConsume 是否需要消耗掉使用的牌
   */
  const onUseResolution = (func: Function, isConsume: boolean = true) => {
    if (_isForce && !useValue.value) {
      return;
    }
    if (isConsume) {
      have.use(useValue.value, 1);
    }
    func(useValue.value);
    useValue.value = "";
    useOptions.value = [];
    useIsConfirm.value = false;
  };

  /**
   * 获得一张卡牌
   * @param card 卡牌
   * @param num 获得的张数
   * @param desc 弹出描述
   */
  const onGain = (
    card: ConsumableCardType | PropCardType,
    num: number,
    desc?: string,
  ) => {
    have.set(card.id, num);
    let children = [
      {
        name: "div",
        attrs: {
          style: "display: flex;align-items: center",
        },
        children: [
          {
            type: "text",
            text: desc ? desc : "",
          },
          {
            name: "br",
          },
          {
            type: "text",
            text: `你获得了${num}×`,
          },
          isConsumableCardType(card)
            ? {
                name: "img",
                attrs: {
                  src: `${card.icon}`,
                  width: "20px",
                  height: "20px",
                },
              }
            : {
                type: "text",
                text: `${card.name}`,
              },
        ],
      },
    ];
    onModel(children);
  };
  /**
   * 获得多张卡牌
   * @param map 集合<卡牌, 张数>
   * @param desc 弹出描述
   */
  const onGains = (
    map: Map<ConsumableCardType | PropCardType, number>,
    desc?: string,
  ) => {
    let children: any = [];
    map.forEach((value: number, key: ConsumableCardType | PropCardType) => {
      have.set(key.id, value);
      children = [
        ...children,
        {
          name: "div",
          attrs: {
            style: "display: flex;align-items: center",
          },
          children: [
            {
              type: "text",
              text: desc ? desc : "",
            },
            {
              type: "text",
              text: `你获得了${value}×`,
            },
            isConsumableCardType(key)
              ? {
                  name: "img",
                  attrs: {
                    src: `${key.icon}`,
                    width: "20px",
                    height: "20px",
                  },
                }
              : {
                  type: "text",
                  text: `${key.name}`,
                },
          ],
        },
      ];
    });
    onModel(children);
  };

  /**
   * 弹出一次提示
   * @param children 内容虚拟dom
   */
  const onModel = (children: Object[]) => {
    modelText.value = [
      {
        name: "div",
        children: children,
      },
    ];
    modelIsConfirm.value = false;
    modelShow.value = true;
  };
  /**
   * 此次弹出框的确认按钮点击操作
   * 一般只在Card组件使用
   */
  const onModelConfirm = () => {
    modelIsConfirm.value = true;
    modelShow.value = false;
    modelText.value = [];
  };

  return {
    onStart,
    onWait,
    testShow,
    testValue,
    testIsConfirm,
    onTest,
    onTestConfirm,
    onTestResolution,
    chooseShow,
    chooseOptions,
    chooseValue,
    chooseIsConfirm,
    onChoose,
    onChooseConfirm,
    onChooseResolution,
    useShow,
    useOptions,
    useValue,
    useIsConfirm,
    onIsHave,
    onUse,
    onUseConfirm,
    onUseResolution,
    onGain,
    onGains,
    modelShow,
    modelText,
    modelIsConfirm,
    onModel,
    onModelConfirm,
  };
});
