<template>
  <div class="component">
    <div class="component-left">
      <p class="component-left__title">{{ title }}</p>
      <span class="component-left__text">{{ text }}</span>
    </div>
    <div class="component-right">
      <div v-if="typeof image != 'undefined' && image.length != 0 &&  image.length != 0" class="lg:hidden block w-full h-[450px]">
        <SliderVue :urlImages="ArrayImages"/>
      </div>
      <div v-if="typeof image != 'undefined'  && image.length != 0" class="hidden lg:block lg:h-[400px] h-[450px] lg:w-[100%] w-full mt-[24px]">
        <div v-if="image ?? 0" class="h-full w-[100%] rounded-[8px]" :style="{'background-image': 'url(' + 'https://admin.studioway11.com' + image + ')'}">
          <a class="flex justify-center items-center w-full h-full backdrop-blur-[8px] backdrop-brightness-[0.4] rounded-[8px]" :href="'https://admin.studioway11.com'+image" data-fancybox>
            <img class="w-[80%] rounded-[8px]" :src="'https://admin.studioway11.com'+image" alt="product stats">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SliderVue from "@/widgets/slider/SliderVue.vue";
import {computed} from "vue";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {});
const props = defineProps<{
  title?: string,
  text?: string,
  image?: string,
}>()

let ArrayImages = computed(() => {
  let images: Array<string> = []
  if (typeof props.image != 'undefined' && props.image.length != 0) {
    images.push(props.image);
  }
  return images
})
</script>

<style lang="postcss" scoped>
.component {
  @apply flex lg:flex-row flex-col lg:items-start items-center lg:justify-between mt-[56px] gap-[40px];

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