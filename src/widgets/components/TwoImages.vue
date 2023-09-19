<template>
  <div class="component">
    <p v-if="typeof title != 'undefined' && title != null" class="component__title">{{ title }}</p>
    <div class="component__images">
      <div
          v-if="typeof leftImage != 'undefined' && leftImage.length != 0 && typeof rightImage != 'undefined' && rightImage.length != 0"
          class="lg:hidden block w-full h-[450px]">
        <SliderVue :urlImages="ArrayImages"/>
      </div>
      <div v-if="typeof leftImage != 'undefined'  && leftImage.length != 0" class="hidden lg:block lg:h-[400px] h-[450px] lg:w-[100%] w-full mt-[24px]">
        <div v-if="leftImage ?? 0" class="h-full w-[100%] rounded-[8px]" :style="{'background-image': 'url(' + 'https://admin.studioway11.com' + leftImage + ')'}">
          <a class="flex justify-center items-center w-full h-full backdrop-blur-[8px] backdrop-brightness-[0.4] rounded-[8px]" :href="'https://admin.studioway11.com'+leftImage" data-fancybox>
            <img class="w-[80%] rounded-[8px]" :src="'https://admin.studioway11.com'+leftImage" alt="product stats">
          </a>
        </div>
      </div>
      <div v-if="typeof rightImage != 'undefined'  && rightImage.length != 0" class="hidden lg:block lg:h-[400px] h-[450px] lg:w-[100%] w-full mt-[24px]">
        <div v-if="rightImage ?? 0" class="h-full w-[100%] rounded-[8px]" :style="{'background-image': 'url(' + 'https://admin.studioway11.com' + rightImage + ')'}">
          <a class="flex justify-center items-center w-full h-full backdrop-blur-[8px] backdrop-brightness-[0.4] rounded-[8px]" :href="'https://admin.studioway11.com'+rightImage" data-fancybox>
            <img class="w-[80%] rounded-[8px]" :src="'https://admin.studioway11.com'+rightImage" alt="product stats">
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
  leftImage?: string,
  rightImage?: string,
}>()

const leftUrlImage = computed(() => {
  let mainUrl = 'https://admin.studioway11.com';
  if(typeof props.leftImage != 'undefined'){
    mainUrl = 'https://admin.studioway11.com' + props.leftImage
  }
  return mainUrl
})
const rightUrlImage = computed(() => {
  let mainUrl = 'https://admin.studioway11.com';
  if(typeof props.leftImage != 'undefined'){
    mainUrl = 'https://admin.studioway11.com' + props.leftImage
  }
  return mainUrl
})
const ArrayImages = computed(() => {
  let images: Array<string> = []
  if (typeof props.leftImage != 'undefined' && props.leftImage.length != 0 && typeof props.rightImage != 'undefined' && props.rightImage.length != 0) {
    images.push(props.leftImage);
    images.push(props.rightImage);
  }
  return images
})

</script>

<style lang="postcss" scoped>
.blurLayout
{
  backdrop-filter: blur(3px);
  height: 100%;
  border-radius: 8px;
  width: 100%;
}
.component {
  @apply mt-[56px] flex flex-col;

  &__title {
    line-height: 32px; /* 114.286% */
    letter-spacing: 0.28px;
    @apply text-[#14161F] text-[24px] lg:text-[28px];
  }

  &__images {
    @apply flex lg:flex-row flex-col lg:items-start items-center lg:justify-between mt-[24px] gap-[20px];

  }
}
</style>