<template>
  <z-paging ref="paging" v-model="dataList" @query="queryList">
    <template #top>
      <view style="
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        background-color: white;
      ">
        <t-search placeholder="请输入关键词" style="width: 100%" v-model:value="params.searchValue" @change="refresh" />
      </view>
    </template>
    <CusList :list="dataList">
      <template v-slot:item="{ item }">
        <Card>
          <view style="display: flex;gap: 0.5rem;">
            <Cover :src="item.cover" />
            <view style="display: flex;flex-direction:column;justify-content: space-between;flex: 1;margin: 0.2rem 0;">
              <view>
                <view style="display: flex;justify-content: space-between">
                  <view style="font-size: 1rem;font-weight: 700">{{ item.name }}</view>
                  <view style="margin-right: 0.5rem;">{{ playersComputed(item.players) }}人</view>
                </view>
                <view>类型：{{ item.type }}</view>
              </view>
              <view style="margin-top: auto">{{ item.tag }}</view>
            </view>
          </view>
        </Card>
      </template>
    </CusList>
  </z-paging>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import CusList from "@/components/cus-list/index.vue";
import Card from "@/components/card/index.vue";
import Cover from "@/components/Cover/index.vue";
import { GameListApi } from "@/games/game_type";
import { isConsecutive } from "@/utils/other";

const params = ref({
  searchValue: "",
});

const paging = ref<ZPagingRef>();
const dataList = ref([]);
const queryList = (pageNum: number, pageSize: number) => {
  GameListApi(pageNum, pageSize, params.value.searchValue).then(res=> {
    paging.value?.complete(res.data.list);
  })
};
const refresh = () => {
  paging.value?.refresh();
};

const playersComputed = computed(()=> {
  return (e: Array<number>) => {
    return isConsecutive(e) ? e[0] + "-" + e[e.length - 1] : e.join(',')
  }
})
</script>

<style scoped>

</style>