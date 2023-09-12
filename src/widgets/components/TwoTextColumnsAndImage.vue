<template>
  <div class="component">
    <div class="">
      <p v-if="typeof title != 'undefined'" class="component-left__title">{{ title }}</p>
    </div>
    <div class="flex w-full">
      <div class="component-left">
        <span v-if="typeof leftText != 'undefined'" class="component-left__text">{{ leftText }}</span>
      </div>
      <div class="component-right">
        <span v-if="typeof leftText != 'undefined'" class="component-left__text">{{ rightText }}</span>
      </div>
    </div>

  </div>
  <div v-if="typeof image != 'undefined' && image.length != 0 &&  image.length != 0" class="lg:hidden block w-full">
    <SliderVue :urlImages="ArrayImages" />
  </div>
  <div class="w-full lg:mt-[24px]" v-if="typeof image != 'undefined' && image.length != 0 &&  image.length != 0"><img v-if="typeof image != 'undefined' && image.length != 0" :src="'https://admin.studioway11.com' + image" class="lg:block hidden object-cover"></div>
</template>

<script setup lang="ts">
import SliderVue from "@/widgets/slider/SliderVue.vue";
import {computed} from "vue";

const props = defineProps<{
  title?: string,
  leftText?: string,
  rightText?: string,
  image?: string
}>()

let ArrayImages = computed(() => {
  let images : Array<string> = []
  if(typeof props.image != 'undefined' && props.image.length != 0)
  {
    images.push(props.image);
  }
  return images
})
</script>

<style lang="postcss" scoped>
.component {
  @apply flex flex-col lg:items-start items-center lg:justify-between mt-[56px] gap-[40px];

  &-left {
    @apply flex flex-col w-full lg:w-[50%];

    &__title {
      line-height: 48px; /* 133.333% */
      letter-spacing: 0.36px;
      @apply text-[#14161F] text-[28px] lg:text-[36px];
    }

    &__text {
      line-height: 32px; /* 160% */
      letter-spacing: 0.2px;
      @apply text-[#14161F] text-[18px] lg:text-[20px] mt-[24px] lg:mt-[32px];
    }
  }

  &-right {
    @apply flex flex-col w-full lg:w-[50%];

    &__title {
      line-height: 48px; /* 133.333% */
      letter-spacing: 0.36px;
      @apply text-[#14161F] text-[28px] lg:text-[36px];
    }

    &__li {
      line-height: 32px; /* 160% */
      letter-spacing: 0.2px;
      @apply text-[#14161F] text-[18px] lg:text-[20px];

      & span {
        @apply text-[#898A8F];
      }
    }
  }
}
</style>