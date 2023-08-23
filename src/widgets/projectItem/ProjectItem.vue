<template>
  <div class="project">
    <div class="project-left">
      <span class="project-left__title">{{project.name}}</span>
      <span class="project-left__type">{{project.type}}</span>
      <span class="project-left__description">{{project.description}}</span>
      <div class="project-left__stack-items">
        <StackItem v-for="(item,index) in project.stack" :key="index" :text="item" />
      </div>
      <router-link to="/project/">Подробнее</router-link>
    </div>
    <div class="project-right">
      <img src="https://sun2-18.userapi.com/impg/u6Xcj1Wd2Mxbz4aSUc_Ltels-pxRxYI95Z_syg/dgF3p3Z7Exg.jpg?size=1027x768&quality=96&sign=f6b45c3fec139aff91062df4ee9e520b&type=album">
    </div>
  </div>
</template>

<script setup lang="ts">
import type {projectType} from "@/entities/types/projectType/projectType";
import StackItem from "@/features/StackText/StackItem.vue";

defineProps<{
  project: projectType
}>()
</script>

<style lang="postcss" scoped>
.project
{
  @apply flex;
  &-left
  {
    @apply flex flex-col w-[50%];
    &__title
    {
      letter-spacing: 0.36px;
      line-height: 48px;
      @apply text-[#14161F] text-[36px];
    }
    &__type
    {
      line-height: 24px;
      letter-spacing: 0.18px;
      @apply text-[#898A8F] text-[18px];
    }
    &__description
    {
      line-height: 32px;
      letter-spacing: 0.2px;
      @apply text-[#14161F] text-[20px] mt-[24px];
    }
    &__stack-items
    {
      @apply flex flex-wrap w-[580px] mt-[24px] gap-[16px];
    }
  }
  &-right
  {
    @apply w-[50%]
  }
}
</style>