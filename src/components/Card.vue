<script setup lang="ts">
import type { EventCardType } from "@/cards/card_type";
import { useOperate } from "@/stores/use_operate";
import { TypeEnum } from "@/enums/type_enum";
import type { PropType } from "@vue/runtime-core";
import { computed } from "vue";
import favicon from "../static/favicon.svg";
import cardImg from "../static/card.jpg";
import { storeToRefs } from "pinia";

const store = useOperate();
const {
  testShow,
  testValue,
  chooseShow,
  chooseOptions,
  chooseValue,
  useShow,
  useOptions,
  useValue,
  modelShow,
  modelText,
} = storeToRefs(store);
const {
  onStart,
  onTestConfirm,
  onChooseConfirm,
  onUseConfirm,
  onModelConfirm,
} = store;

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  card: {
    type: Object as PropType<EventCardType>,
  },
  canFlip: {
    type: Boolean,
    default: true,
  },
  width: {
    type: [Number, String],
    required: true,
  },
  height: {
    type: [Number, String],
    required: true,
  },
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal",
  },
  duration: {
    type: Number,
    default: 1000,
  },
  trigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover",
  },
});

const emit = defineEmits(["update:modelValue", "onFlip", "onUnFlip"]);
const onClick = () => {
  if (props.trigger === "click" && props.canFlip) {
    triggerEmit();
    emit("update:modelValue", !props.modelValue);
  }
};
const onEnterLeave = () => {
  if (props.trigger === "hover" && props.canFlip) {
    triggerEmit();
    emit("update:modelValue", !props.modelValue);
  }
};
const triggerEmit = () => {
  if (!props.modelValue) {
    emit("onFlip");
  } else {
    emit("onUnFlip");
  }
};

const flipInner = computed(() => {
  return [
    props.direction === "horizontal" ? "flip-inner-x" : "",
    props.direction === "vertical" ? "flip-inner-y" : "",
  ];
});
const flipFront = computed(() => {
  return [
    props.direction === "horizontal" ? "flip-front-x" : "",
    props.direction === "vertical" ? "flip-front-y" : "",
  ];
});
const flipBack = computed(() => {
  return [
    props.direction === "horizontal" ? "flip-back-x" : "",
    props.direction === "vertical" ? "flip-back-y" : "",
  ];
});
const duration = computed(() => {
  return "transform " + props.duration + "ms";
});
</script>

<template>
  <div
    :style="{
      width: typeof width === 'number' ? width + 'px' : width,
      height: typeof height === 'number' ? height + 'px' : height,
    }"
    class="flip"
    @click="onClick"
    @mouseenter="onEnterLeave"
    @mouseleave="onEnterLeave"
  >
    <div :class="flipInner" class="flip-inner">
      <div :class="flipBack" class="flip-back">
        <view class="card flex justify-center align-center">
          <image class="card-img" :src="cardImg"></image>
        </view>
      </div>
      <div :class="flipFront" class="flip-front">
        <view class="card card-border" v-if="card">
          <view class="card-name flex align-center">
            <text style="padding-left: 10px">{{ card.name }}</text>
          </view>
          <view class="card-illustration"> </view>
          <view class="card-content flex flex-column align-center">
            <view>{{ card.tag.join(" ") }}</view>
            <view style="margin-top: 10px">{{ card.content }}</view>
          </view>
          <view
            class="card-play flex justify-center align-center"
            @click="onStart(card.play)"
          >
            <view
              class="flex flex-column align-center justify-center"
              style=""
              v-if="card.type === TypeEnum.EVENT"
            >
              <up-icon size="30" :name="favicon"></up-icon>
              <view>结算</view>
            </view>
          </view>
          <view class="card-ex flex align-center">
            <text style="padding-left: 10px">@{{ card.id }}</text>
          </view>
        </view>
      </div>
    </div>
  </div>

  <up-modal :show="testShow" @confirm="onTestConfirm">
    <view class="slot-content">
      <up-input
        type="number"
        placeholder="请输入检定值"
        border="surround"
        v-model="testValue"
      ></up-input>
    </view>
  </up-modal>

  <up-modal :show="chooseShow" @confirm="onChooseConfirm">
    <up-radio-group v-model="chooseValue" placement="column">
      <up-radio
        v-for="(item, index) in chooseOptions"
        :key="index"
        :label="item"
        :name="item"
      >
      </up-radio>
    </up-radio-group>
  </up-modal>

  <up-modal :show="useShow" @confirm="onUseConfirm">
    <view class="slot-content">
      <text v-if="useOptions.length === 0">你没有对应可以使用的卡牌</text>
      <up-radio-group v-model="useValue" placement="column">
        <up-radio
          v-for="(item, index) in useOptions"
          :key="index"
          :label="item.name"
          :name="item.id"
        >
        </up-radio>
      </up-radio-group>
    </view>
  </up-modal>

  <up-modal :show="modelShow" @confirm="onModelConfirm">
    <view class="slot-content">
      <rich-text :nodes="modelText"></rich-text>
    </view>
  </up-modal>
</template>

<style scoped>
.card {
  height: 100%;
}
.card-img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.card-border {
  border: 5px #434343 solid;
  border-radius: 10px;
}
.card-name {
  height: 10%;
  width: 100%;
  border-bottom: 1px #434343 solid;
}
.card-illustration {
  height: 40%;
  border-bottom: 1px #434343 solid;
}
.card-content {
  padding: 10px;
  height: 30%;
  box-sizing: border-box;
  font-family: 楷体;
  font-size: 14px;
}
.card-play {
  height: 15%;
  width: 100%;
  color: white;
  font-size: 14px;
  background-image: linear-gradient(to right, #434343, black, #434343);
  background-blend-mode: multiply, multiply;
}
.card-ex {
  height: 5%;
  width: 100%;
  font-size: 12px;
}

.flip {
  perspective: 1000px;
}
.flip-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: v-bind(duration);
}
.flip-front,
.flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.flip-inner-x {
  transform: v-bind("props.modelValue ? 'rotateY(0deg)' : 'rotateY(180deg)'");
}
.flip-inner-y {
  transform: v-bind("props.modelValue ? 'rotateX(0deg)' : 'rotateX(180deg)'");
}
.flip-front-x {
  transform: rotateY(0deg);
}
.flip-front-y {
  transform: rotateX(0deg);
}
.flip-back-x {
  transform: rotateY(180deg);
}
.flip-back-y {
  transform: rotateX(180deg);
}
</style>
