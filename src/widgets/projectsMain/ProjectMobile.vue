<template>
  <div v-if="projectCount == index">
    <div class="my-[24px] sm:h-[450px] h-[300px]">
      <SliderVue :urlImages="urlImage"/>
    </div>
    <span class="text-[18px] leading-[24px] text-[#14161F]" v-html="markedText"></span>
    <div class="projects__tags">
      <StackItem v-for="(item,index) in project.project.data.attributes.technologies" :key="index" :text="item.name" />
    </div>
    <div class="projects__buttons">
      <router-link :to="'/project/' + project.project.data.id">
        <div>Подробнее</div>
      </router-link>
      <router-link to="/projects" class="outline">
        <div>Все проекты</div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import SliderVue from "@/widgets/slider/SliderVue.vue";
import type {projectInterface} from "@/entities/dto/projects/projectInterface";
import StackItem from "@/features/StackText/StackItem.vue";
import {computed} from "vue";
import {marked} from "marked";
import type {homepageType} from "@/entities/types/homepage/homepageType";
import type {roadOfProjectsInterface} from "@/entities/types/homepage/roadOfProjectsInterface";

const props = defineProps<{
  index: number
  projectCount: number
  project: roadOfProjectsInterface
}>()

const urlImage = computed(() => {
  let images : Array<string> = []
  if(props.project != null && props.project.project.data.attributes.gallery != null) {
    props.project.project.data.attributes.gallery.data.forEach((image) => {
      images.push(image.attributes.url)
    })
  }
  return images
})

const markedText = computed(() => {
  const markedText = marked.parse(props.project.project.data.attributes.description)
  return markedText.replace('\n','<br>')
})

</script>

<style lang="postcss" scoped>
.projects
{
  &__tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    @apply gap-[16px];

    span {
      padding: 8px 20px;
      border: 1px solid #787878;
      border-radius: 5px;
      @apply lg:text-[18px] text-[16px]
    }
  }
  &__buttons {
    @apply flex w-full sm:flex-row justify-between sm:items-start items-center flex-col mt-[48px];

    a {
      position: relative;
      width: calc(50% - 10px);
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
      @apply sm:w-[calc(50%-10px)] w-[70%];

      &:hover {
        transform: skew(-18deg) translateY(2px);
        border-right: 1px solid #438CB4;
        border-bottom: 1px solid #438CB4;
      }

      &.outline {
        background-color: #fff;

        @apply sm:mt-0 mt-[16px];

        div {
          color: #438CB4;
          @apply lg:mt-[4px] mt-0 lg:text-[22px] text-[18px] leading-[32px];
        }
      }

      div {
        font-weight: 300;
        color: #fff;
        transform: skew(18deg);
        @apply lg:text-[22px] text-[18px];
      }
    }

    button {
      position: relative;
      width: calc(50% - 10px);
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
      @apply sm:w-[calc(50%-10px)] w-[70%] sm:mt-[0] mt-[13px];

      &:hover {
        transform: skew(-18deg) translateY(2px);
        border-right: 1px solid #438CB4;
        border-bottom: 1px solid #438CB4;
      }

      &.outline {
        background-color: #fff;

        div {
          color: #438CB4;
        }
      }

      div {
        font-weight: 300;
        color: #fff;
        transform: skew(18deg);
        @apply lg:text-[22px] text-[18px];
      }
    }
  }
}
</style>