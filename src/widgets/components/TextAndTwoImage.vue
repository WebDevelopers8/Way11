<template>
  <div class="component">
    <div class="component-left">
      <p class="component-left__title">{{ title }}</p>
      <span class="component-left__text" v-html="markedText"></span>
    </div>
    <div class="component__images">
      <div
          v-if="typeof leftImage != 'undefined' && leftImage.length != 0 && typeof rightImage != 'undefined' && rightImage.length != 0"
          class="lg:hidden block w-full">
        <SliderVue :urlImages="ArrayImages"/>
      </div>
      <a v-if="typeof leftImage != 'undefined'  && leftImage.length != 0"
         :href="'https://admin.studioway11.com'+leftImage" data-fancybox>
        <img class="lg:block hidden object-cover w-full rounded-[8px]" :src="'https://admin.studioway11.com'+leftImage" alt="product stats">
      </a>
      <a v-if="typeof rightImage != 'undefined' && rightImage.length != 0"
         :href="'https://admin.studioway11.com'+rightImage" data-fancybox>
        <img class="lg:block hidden object-cover w-full rounded-[8px]" :src="'https://admin.studioway11.com'+rightImage" alt="product stats">
      </a>

    </div>
  </div>
</template>

<script setup lang="ts">
import SliderVue from "@/widgets/slider/SliderVue.vue";
import {computed} from "vue";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {marked} from "marked";

Fancybox.bind("[data-fancybox]", {});
const props = defineProps<{
  title?: string,
  text?: string,
  leftImage?: string,
  rightImage?: string,
}>()

const ArrayImages = computed(() => {
  let images: Array<string> = []
  if (typeof props.leftImage != 'undefined' && props.leftImage.length != 0 && typeof props.rightImage != 'undefined' && props.rightImage.length != 0) {
    images.push(props.leftImage);
    images.push(props.rightImage);
  }
  return images
})

const markedText = computed(() => {
  if( typeof props.text != 'undefined')
  {
    const markedText = marked.parse(props.text)
    return markedText
  }
  return ''
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
  &__images {
    @apply flex lg:flex-row flex-col lg:items-start items-center lg:justify-between mt-[24px] gap-[20px];

    & a {
      @apply lg:w-[48%]
    }
  }
}
</style>