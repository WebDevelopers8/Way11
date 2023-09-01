<template>
  <div class="item" v-if="typeof urlImages == 'undefined'">
    <Splide class="flex justify-center items-center h-[98%] " :options="{ rewind: true, padding:{left:20, right: 20}, gap:20 }" aria-label="My Favorite Images">
      <SplideSlide class="slide" v-for="item in 4" :key="item">
        <img src="@/shared/images/slider-img-1.png">
      </SplideSlide>
      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev bg-transparent"><img src="@/shared/images/arrow-prev.png"></button>
        <button class="splide__arrow splide__arrow--next bg-transparent"><img src="@/shared/images/arrow-next.png"></button>
      </div>
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
  <div class="project" v-if="typeof urlImages != 'undefined'">
    <Splide class="flex justify-center items-center h-[100%] " :options="{ rewind: true, gap:20 }" aria-label="My Favorite Images">
      <SplideSlide class="slide" v-for="(item, index) in urlImages" :key="index">
        <img :src="item">
      </SplideSlide>
      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev bg-transparent"><img src="@/shared/images/arrow-prev.png"></button>
        <button class="splide__arrow splide__arrow--next bg-transparent"><img src="@/shared/images/arrow-next.png"></button>
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
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
const activeItem = ref(1)
const itemsLength = ref(4)


const props = defineProps<{
  urlImages?: Array<string>
}>()

function getMaxCounts() {
  itemsLength.value = typeof props.urlImages != 'undefined'  ? props.urlImages.length : 4
}
getMaxCounts()

</script>

<style lang="postcss" scoped>
.splide__arrow
{
  background-color: transparent !important;
  opacity: 1 !important;
}
.slide
{
  @apply flex justify-center items-center w-full;
}
@media (max-width: 425px) {
  .splide__arrow
  {
    @apply hidden
  }
  .splide__list
  {
    padding: 0 20px !important;
    @apply gap-[20px]
  }
}
.item {
  background-image: url("@/shared/images/slider-bg.png");
  background-size: cover;
  @apply w-[100%] h-[96%] flex bg-no-repeat rounded-[20px];

  &__bg {
    @apply w-full h-full;
  }
}
.project
{
  @apply w-[100%] h-[100%] rounded-[20px];

  &__bg {
    @apply w-full h-full;
  }
}
.splide__pagination {

  & li
  {
    transition: all 0.01s ease;
    width: 18px !important;
    height: 18px !important;
    border-radius: 20px !important;
    @apply flex justify-center items-center relative;
    &.is-active {
      border: solid #5BB6F1 2px !important;
    }
  }
  &__page
  {
      transition: all 0.3s ease;
    width: 8px !important;
    height: 8px !important;
    background-color: #989899 !important;
    opacity: 1 !important;
      @apply rounded-[12px];
      &.is-active
      {

        @apply bg-[#FFF]
      }
  }
}
.slider {
  @apply flex flex-col w-full h-full;

  &-slide {
    @apply flex justify-center items-center w-full h-full gap-[30px]
  }

  &-points {
    transition: all 0.3s ease;
    @apply flex justify-center mt-[-35px] sm:mt-[-55px] gap-[10px] w-full;

    & div
    {
      transition: all 0.01s ease;
      @apply flex justify-center items-center w-[18px] h-[18px] relative rounded-[20px];
      &.active {
        @apply border-solid border-[#5BB6F1] border-[2px] ;
      }
    }
    &__item {
      transition: all 0.3s ease;
      @apply bg-[#989899] w-[8px] h-[8px] rounded-[12px];
      &.active
      {
        @apply bg-[#FFF]
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
}

</style>