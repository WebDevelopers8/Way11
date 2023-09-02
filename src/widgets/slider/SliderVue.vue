<template>
  <div class="slider-bg" v-if="typeof urlImages == 'undefined'">
    <Splide class="flex justify-center items-center h-[98%] "
            :options="{ rewind: true, padding:{left:20, right: 20}, gap:50, classes: classes, arrowPath: arrow.arrowPath }"
            aria-label="My Favorite Images">
      <SplideSlide class="slide" v-for="item in 4" :key="item">
        <img src="@/shared/images/slider-img-1.png">
      </SplideSlide>
      <!--      <div class="splide__arrows">-->
      <!--        <button class="splide__arrow splide__arrow&#45;&#45;prev bg-transparent"><img src="@/shared/images/arrow-prev.png"></button>-->
      <!--        <button class="splide__arrow splide__arrow&#45;&#45;next bg-transparent"><img src="@/shared/images/arrow-next.png"></button>-->
      <!--      </div>-->
    </Splide>
    <!--    <div class="slider">-->
    <!--      <div class="slider-slide">-->
    <!--        <button class="sm:block hidden" @click="activeItem == 1 ? activeItem = itemsLength : activeItem&#45;&#45;"><img src="@/shared/images/arrow-prev.png"></button>-->
    <!--        <div :class="{active:activeItem == 1}" class="slider__item">-->
    <!--          <img src="@/shared/images/slider-img-1.png">-->
    <!--        </div>-->
    <!--        <div :class="{active:activeItem == 2}" class="slider__item">-->
    <!--          <img src="@/shared/images/slider-img-2.png">-->
    <!--        </div>-->
    <!--        <div :class="{active:activeItem == 3}" class="slider__item">-->
    <!--          <img src="@/shared/images/slider-img-1.png">-->
    <!--        </div>-->
    <!--        <div :class="{active:activeItem == 4}" class="slider__item">-->
    <!--          <img src="@/shared/images/slider-img-2.png">-->
    <!--        </div>-->
    <!--        <button class="sm:block hidden" @click="activeItem == itemsLength ? activeItem = 1 : activeItem++"><img src="@/shared/images/arrow-next.png"></button>-->
    <!--      </div>-->
    <!--      <div class="slider-points">-->
    <!--        <div :class="{active:activeItem == 1}">-->
    <!--          <button @click="activeItem = 1" :class="{active:activeItem == 1}" class="slider-points__item"></button>-->
    <!--        </div>-->
    <!--        <div :class="{active:activeItem == 2}">-->
    <!--          <button @click="activeItem = 2" :class="{active:activeItem == 2}" class="slider-points__item"></button>-->
    <!--        </div>-->
    <!--        <div :class="{active:activeItem == 3}">-->
    <!--          <button @click="activeItem = 3" :class="{active:activeItem == 3}" class="slider-points__item"></button>-->
    <!--        </div>-->
    <!--        <div :class="{active:activeItem == 4}">-->
    <!--          <button @click="activeItem = 4" :class="{active:activeItem == 4}" class="slider-points__item"></button>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
  <div class="slider-bg" v-if="typeof urlImages != 'undefined'">
    <Splide class="flex justify-center items-center h-[100%] " :options="{ rewind: true, gap:20 }"
            aria-label="My Favorite Images">
      <SplideSlide class="slide" v-for="(item, index) in urlImages" :key="index">
        <img :src="item">
      </SplideSlide>
      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev bg-transparent"><img src="@/shared/images/arrow-prev.png">
        </button>
        <button class="splide__arrow splide__arrow--next bg-transparent"><img src="@/shared/images/arrow-next.png">
        </button>
      </div>
      <div>

      </div>
    </Splide>
    <!--    <div class="slider">-->
    <!--      <div class="slider-slide">-->
    <!--        <button class="sm:block hidden" @click="activeItem == 1 ? activeItem = itemsLength : activeItem&#45;&#45;"><img src="@/shared/images/arrow-prev.png"></button>-->
    <!--        <SliderImage v-for="(item, index) in urlImages" :activeItem="activeItem" :key="index" :id="index + 1" :url="item" />-->
    <!--        <div :class="{active:activeItem == 1}" class="slider__item">-->
    <!--          <img src="@/shared/images/slider-img-1.png">-->
    <!--        </div>-->
    <!--        <button class="sm:block hidden" @click="activeItem == itemsLength ? activeItem = 1 : activeItem++"><img src="@/shared/images/arrow-next.png"></button>-->
    <!--      </div>-->
    <!--      <div class="slider-points">-->
    <!--        <SliderPoint v-for="(item, index) in urlImages" :key="index" :id="index + 1"  :activeItem="activeItem" @update-activeItem="(id : number) => activeItem = id" />-->
    <!--        <div :class="{active:activeItem == 1}">-->
    <!--          <button @click="activeItem = 1" :class="{active:activeItem == 1}" class="slider-points__item"></button>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import SliderImage from "@/features/Slider/SliderImage.vue";
import SliderPoint from "@/features/Slider/SliderPoint.vue";
//@ts-ignore
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const activeItem = ref(1)
const itemsLength = ref(4)


const props = defineProps<{
  urlImages?: Array<string>
}>()

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

.slide {
  @apply flex justify-center items-center w-full;
}

@media (max-width: 425px) {
  .slider__arrow {
    @apply hidden
  }

  .splide__list {
    padding: 0 20px !important;
    @apply gap-[20px]
  }
}

.slider-bg {
  background-image: url("@/shared/images/slider-bg.png");
  background-size: cover;
  @apply w-[100%] h-[96%] flex bg-no-repeat rounded-[20px];

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