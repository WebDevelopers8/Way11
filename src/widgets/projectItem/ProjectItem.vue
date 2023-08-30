<template>
  <div class="project">
    <div class="project-left">
      <span class="project-left__title">{{project.name}}</span>
      <span class="project-left__type">{{project.type}}</span>
      <div class="project-left__mobile">
        <SliderVue />
      </div>
      <span class="project-left__description">{{project.description}}</span>
      <div class="project-left__stack-items">
        <StackItem v-for="(item,index) in project.stack" :key="index" :text="item" />
      </div>
      <div class="project-left__more">
        <router-link class="" to="/project/0"><div>Подробнее</div></router-link>
      </div>
    </div>
    <div class="project-right">
      <SliderVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import type {projectType} from "@/entities/types/projectType/projectType";
import StackItem from "@/features/StackText/StackItem.vue";
import SliderVue from "@/widgets/slider/SliderVue.vue";

defineProps<{
  project: projectType
}>()
</script>

<style lang="postcss" scoped>
.project
{
  @apply flex border-b-[1px] pb-[56px];
  &:last-child
  {
    @apply border-b-[0px]
  }
  &-left
  {
    @apply flex flex-col lg:w-[50%] w-[100%];
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
      @apply flex flex-wrap xl:w-[580px] lg:w-[500px] mt-[24px] gap-[16px];
    }
    &__more {
      @apply flex justify-between mt-[50px];
      & a {
        position: relative;
        width: calc(50% - 10px);
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
        &:hover {
          transform: skew(-18deg) translateY(2px);
          border-right: 1px solid #438CB4;
          border-bottom: 1px solid #438CB4;
        }
        div {
          font-size: 22px;
          color:#fff;
          transform: skew(18deg);
          position: absolute;
          font-weight: 300;
          top: 12px;
          @apply xl:left-[30%];
        }
      }
    }
    &__mobile
    {
      @apply lg:hidden sm:h-[500px] h-[300px] w-full my-[24px];
    }
  }
  &-right
  {
    @apply lg:block hidden lg:w-[50%]
  }
}
</style>