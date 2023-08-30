<template>
  <div class="component">
    <p class="component__title">Документооборот</p>
    <div class="component__images">
      <div class="lg:hidden block w-full">
        <SliderVue :urlImages="[FirstImage, SecondImage]" />
      </div>
      <img class="lg:block hidden" src="@/shared/images/project/docList.png" alt="document list">
      <img class="lg:block hidden" src="@/shared/images/project/sendDoc.png" alt="send document">
    </div>
  </div>
</template>

<script setup lang="ts">
import FirstImage from "@/shared/images/project/docList.png";
import SecondImage from "@/shared/images/project/sendDoc.png";
import SliderVue from "@/widgets/slider/SliderVue.vue";
</script>

<style lang="postcss" scoped>
.component
{
  @apply mt-[56px] flex flex-col;
  &__title
  {
    line-height: 32px; /* 114.286% */
    letter-spacing: 0.28px;
    @apply text-[#14161F] text-[24px] lg:text-[28px];
  }
  &__images
  {
    @apply flex lg:flex-row flex-col lg:items-start items-center lg:justify-between mt-[24px] gap-[20px];
    & img
    {
      @apply 2xl:w-auto lg:w-[45%]
    }
  }
}
</style>