<template>
  <div class="project">
    <div class="project-left">
      <span class="project-left__title">{{ project.attributes.name }}</span>
      <span v-if="project.attributes.categories.data.length != 0"
            class="project-left__type">{{ project.attributes.categories.data[0].attributes.name }}</span>
      <div class="project-left__mobile">
        <SliderVue :urlImages="imageUrls"/>
      </div>
      <span class="project-left__description" v-html="markedText"></span>
      <div class="project-left__stack-items">
        <StackItem v-for="(item,index) in project.attributes.technologies" :key="index" :text="item.name"/>
      </div>
      <div class="project-left__more">
        <router-link class="" :to="'/project/' + project.id">
          <div>Подробнее</div>
        </router-link>
      </div>
    </div>
    <div class="project-right">
      <SliderVue :urlImages="imageUrls"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import StackItem from "@/features/StackText/StackItem.vue";
import SliderVue from "@/widgets/slider/SliderVue.vue";
import type {projectInterface} from "@/entities/dto/projects/projectInterface";
import {computed} from "vue";
import {marked} from "marked";

const props = defineProps<{
  project: projectInterface
}>()

const imageUrls = computed(() => {
  let images: Array<string> = []
  props.project.attributes.gallery.data.forEach(image => {
    images.push(image.attributes.url)
  })
  console.log(images)
  return images
})

const markedText = computed(() => {
  const markedText = marked.parse(props.project.attributes.description)
  return markedText.replace('\n', '<br>')
})
</script>

<style lang="postcss" scoped>
.project {
  @apply flex border-b-[1px] pb-[56px];

  &:last-child {
    @apply border-b-[0px]
  }

  &-left {
    @apply flex flex-col lg:w-[50%] w-[100%];

    &__title {
      @apply lg:tracking-[0.36px] lg:leading-[48px] tracking-[0.28px] leading-[40px]  text-[#14161F] text-[28px] lg:text-[36px];
    }

    &__type {
      line-height: 24px;
      @apply lg:tracking-[0.18px] tracking-[0.16] text-[#898A8F] text-[16px] lg:text-[18px];
    }

    &__description {
      @apply lg:tracking-[0.2px] tracking-[0.18px] lg:leading-[32px] leading-[24px] text-[#14161F] text-[18px] lg:text-[20px] mt-[24px];
    }

    &__stack-items {
      @apply flex flex-wrap xl:w-[480px] mt-[24px] gap-[16px];
    }

    &__more {
      @apply flex lg:justify-between justify-center mt-[50px];

      & a {
        position: relative;
        height: 58px;
        background-color: #5BB6F1;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: skew(-18deg);
        border: 1px solid #438CB4;
        border-right: 5px solid #438CB4;
        border-bottom: 5px solid #438CB4;
        transition: all .2s ease;
        @apply lg:w-[calc(50%-10px)] sm:w-[50%] w-[70%];

        &:hover {
          transform: skew(-18deg) translateY(2px);
          border-right: 1px solid #438CB4;
          border-bottom: 1px solid #438CB4;
        }

        div {
          color: #fff;
          transform: skew(18deg);
          position: absolute;
          font-weight: 300;
          top: 12px;
          @apply xl:left-[30%] lg:text-[22px] text-[18px];
        }
      }
    }

    &__mobile {
      @apply lg:hidden sm:h-[500px] h-[300px] w-full my-[24px];
    }
  }

  &-right {
    @apply min-h-[350px] lg:block hidden lg:w-[50%]
  }
}
</style>