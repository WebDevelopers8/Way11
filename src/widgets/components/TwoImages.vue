<template>
  <div class="component">
    <p v-if="typeof title != 'undefined' && title != null" class="component__title">{{ title }}</p>
    <div class="component__images">
      <div
          v-if="typeof leftImage != 'undefined' && leftImage.length != 0 && typeof rightImage != 'undefined' && rightImage.length != 0"
          class="lg:hidden block w-full">
        <SliderVue :urlImages="ArrayImages"/>
      </div>
      <a v-if="typeof leftImage != 'undefined'  && leftImage.length != 0"
         :href="'https://admin.studioway11.com'+leftImage" data-fancybox>
        <img class="lg:block hidden object-cover" :src="'https://admin.studioway11.com'+leftImage" alt="product stats">
      </a>
      <a v-if="typeof rightImage != 'undefined' && rightImage.length != 0"
         :href="'https://admin.studioway11.com'+rightImage" data-fancybox>
        <img class="lg:block hidden object-cover" :src="'https://admin.studioway11.com'+rightImage" alt="product stats">
      </a>

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
.component {
  @apply mt-[56px] flex flex-col;

  &__title {
    line-height: 32px; /* 114.286% */
    letter-spacing: 0.28px;
    @apply text-[#14161F] text-[24px] lg:text-[28px];
  }

  &__images {
    @apply flex lg:flex-row flex-col lg:items-start items-center lg:justify-between mt-[24px] gap-[20px];

    & a {
      @apply lg:w-[45%]
    }
  }
}
</style>