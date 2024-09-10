<template>
  <view class="container">
    <view>
      <up-button
        type="primary"
        text="继续"
        @click="onContinue"
        v-if="cache.get('settings_notFirstGame')"
      ></up-button>
    </view>
    <view style="margin-top: 10px">
      <up-button type="primary" text="新的一局" @click="onRestart"></up-button>
    </view>
  </view>

  <up-modal :show="modelShow" @confirm="onModelConfirm">
    <view class="slot-content" style="width: 100%">
      <view class="flex align-center">
        <view>游玩人数</view>
        <view style="flex: 1">
          <up-slider
            v-model="sliderValue"
            min="1"
            max="4"
            showValue
          ></up-slider>
        </view>
      </view>
      <up-checkbox-group v-model="checkboxValue" placement="column">
        <up-checkbox
          :customStyle="{ marginBottom: '8px' }"
          label="是否使用app计算检定值"
          name="isTestValueCompute"
        >
        </up-checkbox>
        <up-checkbox
          :customStyle="{ marginBottom: '8px' }"
          label="是否使用app抽取事件"
          name="isEventDuel"
        >
        </up-checkbox>
      </up-checkbox-group>
    </view>
  </up-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { cache, have } from "@/utils/cache";
import { getCards, shuffle } from "@/utils/card";
import { TypeEnum } from "@/enums/type_enum";
import { useLoad } from "@/hooks/use_load";

const { onLoad } = useLoad();
onLoad();

const modelShow = ref(false);
const onModelConfirm = () => {
  have.removeAll();
  getCards({ type: TypeEnum.EVENT }, "id");
  cache.set(
    "settings_cardList",
    shuffle<string>(getCards({ type: TypeEnum.EVENT }, "id")),
  );
  cache.set("settings_history", []);
  cache.set("settings_people", sliderValue.value);
  cache.set("settings_checks", checkboxValue.value);
  cache.set("settings_notFirstGame", true);
  uni.navigateTo({ url: "/pages/index/index" });
  modelShow.value = false;
};

const sliderValue = ref(4);
const checkboxValue = ref(["isTestValueCompute", "isEventDuel"]);

const onContinue = () => {
  uni.navigateTo({ url: "/pages/index/index" });
};

const onRestart = () => {
  uni.showModal({
    title: "提示",
    content: "确认开始新的一局吗？",
    success(res) {
      if (res.confirm) {
        modelShow.value = true;
      }
    },
  });
};
</script>

<style scoped>
.container {
  padding: 10px;
}
</style>
