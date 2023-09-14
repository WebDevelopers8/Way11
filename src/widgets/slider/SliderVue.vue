<template>
  <div :style="{'background-image': 'url(' + bgImage + ')'}" class="slider-bg" v-if="typeof urlImages != 'undefined' && bgImage.length != 0">
    <div class="firstLayout">
        <Splide class="flex justify-center items-center lg:h-[100%] h-[300px] rounded-[8px] bg-[#000000a3]" :options="{ rewind: true, padding:{left:20, right: 20}, gap:50, classes: classes, arrowPath: arrow.arrowPath }"
                aria-label="My Favorite Images">
          <SplideSlide class="slide" v-for="(item, index) in urlImages" :key="index">
            <a :href="'https://admin.studioway11.com' + item" data-fancybox>
              <img class="rounded-[20px]" :src="'https://admin.studioway11.com' + item">
            </a>
          </SplideSlide>
        </Splide>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
//@ts-ignore
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
});

const activeItem = ref(1)
const itemsLength = ref(4)
const props = defineProps<{
  urlImages?: Array<string>
}>()

const bgImage = computed(() => {
  let urlLink = ''
  if(typeof props.urlImages != 'undefined' && props.urlImages.length != 0)
  {
      urlLink = 'https://admin.studioway11.com' + props.urlImages[0]
  }
  console.log(urlLink)
  return urlLink
})

function getMaxCounts() {
  itemsLength.value = typeof props.urlImages != 'undefined' ? props.urlImages.length : 4
}

getMaxCounts()

let classes =  {
  // Add classes for arrows.
  arrows: 'splide__arrows sliders-arrows',
      arrow : 'splide__arrow sliders-arrow',
      prev  : 'splide__arrow--prev sliders-arrow__prev',
      next  : 'splide__arrow--next sliders-arrow__next',

      // Add classes for pagination.
      pagination: 'splide__pagination your-class-pagination sliders-points', // container
      page      : 'splide__pagination__page sliders-points__item', // each button
}

let arrow = {
  arrowPath: "M0.482142 21.4575C0.182519 21.7435 0.171478 22.2182 0.457482 22.5179C0.743487 22.8175 1.21823 22.8285 1.51786 22.5425L0.482142 21.4575ZM12 11.5L12.5179 12.0425C12.6661 11.901 12.75 11.705 12.75 11.5C12.75 11.295 12.6661 11.099 12.5179 10.9575L12 11.5ZM1.51786 22.5425L12.5179 12.0425L11.4821 10.9575L0.482142 21.4575L1.51786 22.5425ZM12.5179 10.9575L1.51786 0.457482L0.482144 1.54252L11.4821 12.0425L12.5179 10.9575Z"
}

</script>

<style lang="postcss">

.firstLayout
{
  backdrop-filter: blur(3px);
  height: 100%;
  border-radius: 8px;
}

@media  (min-width: 625px) {
  .slide
  {
    width: 80% !important;
    left: 10%;
    @apply flex justify-center items-center;
  }
}

@media (max-width: 425px) {
  .slider__arrow {
    @apply hidden
  }
}

.slider-bg {
  background-size: cover;
  @apply w-[100%] h-[96%] bg-no-repeat rounded-[20px];

  &__bg {
    @apply w-full h-full;
  }
}

.project {
  @apply w-[100%] h-[100%] rounded-[20px];

  &__bg {
    @apply w-full h-full;
  }
}

.sliders {
  @apply flex flex-col w-full h-full;

  &-slide {
    @apply flex justify-center items-center w-full h-full gap-[30px]
  }

  &-points {
    transition: all 0.3s ease;
    @apply flex justify-center mt-[-35px] sm:mt-[-55px] w-full;

    & li {
      transition: all 0.01s ease;
      @apply flex justify-center items-center w-[20px] h-[20px] relative rounded-[20px];
    }

    &__item {
      transition: all 0.3s ease;
      @apply bg-[#989899] w-[8px] opacity-[0.4] h-[8px] rounded-[12px];

      &.is-active {
        transform: none;
        @apply opacity-100 m-0 w-[8px] h-[8px] bg-[#FFF];
        &::before
        {
          content: '';
          border-width: 2px;
          border-style: solid;
          border-color: #5BB6F1;
          padding: 7px;
          position: absolute;
          margin-top: -9px;
          margin-left: -9px;
          border-radius: 100%;
        }
      }
    }
  }

  & button {
    @apply text-[#FFF] text-[18px];
  }

  &__item {
    animation-duration: 0.5s;
    transition: all 0.5s ease;
    transform: translateX(-100px);
    @apply opacity-0 ml-[-200px] sm:w-[70%] w-[90%] left-0 hidden;

    & img {
      @apply w-[100%] object-contain;
    }

    &.active {
      transform: translateX(0);
      @apply opacity-100 ml-[0] block;
    }
  }
  &-arrows
  {
    @apply lg:block hidden;
  }
  &-arrow{
    @apply bg-transparent text-[#FFF] opacity-100 w-[5em] h-[5em];
    &__prev
    {
      @apply left-[-1.5em] top-[52%];
    }
    &__next
    {
      @apply right-[-1.5em] top-[52%];
    }
    & svg
    {
      fill: #FFF !important;
      @apply w-[62px] h-[62px];
    }
}
}

</style>