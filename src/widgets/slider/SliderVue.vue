<template>
  <div class="item">
    <!--    <img src="@/shared/images/slider-bg.png" class="item__bg">-->
    <div class="slider">
      <div class="slider-slide">
        <button class="sm:block hidden" @click="activeItem == 1 ? activeItem = itemsLength : activeItem--"><img src="@/shared/images/arrow-prev.png"></button>
        <div :class="{active:activeItem == 1}" class="slider__item">
          <img src="@/shared/images/slider-img-1.png">
        </div>
        <div :class="{active:activeItem == 2}" class="slider__item">
          <img src="@/shared/images/slider-img-2.png">
        </div>
        <div :class="{active:activeItem == 3}" class="slider__item">
          <img src="@/shared/images/slider-img-1.png">
        </div>
        <div :class="{active:activeItem == 4}" class="slider__item">
          <img src="@/shared/images/slider-img-2.png">
        </div>
        <button class="sm:block hidden" @click="activeItem == itemsLength ? activeItem = 1 : activeItem++"><img src="@/shared/images/arrow-next.png"></button>
      </div>
      <div class="slider-points">
        <div :class="{active:activeItem == 1}">
          <button @click="activeItem = 1" :class="{active:activeItem == 1}" class="slider-points__item"></button>
        </div>
        <div :class="{active:activeItem == 2}">
          <button @click="activeItem = 2" :class="{active:activeItem == 2}" class="slider-points__item"></button>
        </div>
        <div :class="{active:activeItem == 3}">
          <button @click="activeItem = 3" :class="{active:activeItem == 3}" class="slider-points__item"></button>
        </div>
        <div :class="{active:activeItem == 4}">
          <button @click="activeItem = 4" :class="{active:activeItem == 4}" class="slider-points__item"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const activeItem = ref(1)
const itemsLength = ref(4)


</script>

<style lang="postcss" scoped>

.item {
  background-image: url("@/shared/images/slider-bg.png");
  background-size: cover;
  @apply w-[100%] h-[100%] bg-no-repeat rounded-[20px];

  &__bg {
    @apply w-full h-full;
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

@keyframes slider__item {
  from{
    transform: translateX(-100px);
  }
  to
  {
    transform: translateX(0px);
  }
}
</style>