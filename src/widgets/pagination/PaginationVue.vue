<template>
  <div class="flex justify-center mt-[80px] gap-[10px]">
    <div class="button">
      <button v-if="maxPages != 1" class="bg-[#5BB6F1]" @click="() => {1 == currPage ? emit('updatePage', 1) : emit('updatePage', currPage - 1); router.push({path: '/projects', hash:'#project'})}">
        <div class="left-[16px]"><img src="@/shared/images/projects/arrow.svg" alt="arrow"></div>
      </button>
    </div>
    <div class="flex" v-if="maxPages != 1">
      <PaginationItem  v-for="(item,index) in maxPages" :key="index" :numberPage="item" :currPage="currPage" @updatePage="(changedPage : number) => emit('updatePage', changedPage)" />
    </div>
    <div class="button">
      <button v-if="maxPages != 1" @click="() => {maxPages == currPage ? emit('updatePage', maxPages) : emit('updatePage', currPage + 1); router.push({path: '/projects', hash:'#project'})}">
        <div class="left-[20px]"><img class="back-arrow" src="@/shared/images/projects/arrow.svg" alt="arrow"></div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import PaginationItem from "@/features/pagination/PaginationItem.vue";
import router from "@/app/router";

defineProps<{
  currPage: number,
  maxPages: number,
}>()

const emit = defineEmits(["updatePage"])
</script>

<style lang="postcss" scoped>

.back-arrow {
  transform: rotate(180deg);
}
.button {
  @apply flex justify-between ;

  & button {
    position: relative;
    height: 58px;
    background-color: #5BB6F1;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: skew(-18deg);
    border: 1px solid #438CB4;
    border-right: 5px solid #438CB4;
    border-bottom: 5px solid #438CB4;
    transition: all .2s ease;
    @apply sm:w-[86px] w-[60px];

    &:hover {
      transform: skew(-18deg) translateY(2px);
      border-right: 1px solid #438CB4;
      border-bottom: 1px solid #438CB4;
    }

    div {
      color: #fff;
      transform: skew(15deg);
      position: absolute;
      font-weight: 300;
      top: 30%;
      @apply lg:left-[40%];

      img {
        width: 19px;
        height: 20px;
      }
    }
  }
}
</style>