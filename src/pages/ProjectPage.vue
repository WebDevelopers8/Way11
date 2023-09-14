<template>
  <img class="background" src="@/shared/images/projects/background.png">
  <div class="container">
    <div class="project-title">
      <button class="project-title__link" @click="router.back()"><img src="@/shared/images/project/blackArrow.svg" alt="arrow"></button>
<!--      <router-link to="/projects" class="project-title__link"><img src="@/shared/images/project/blackArrow.svg" alt="arrow">-->
<!--      </router-link>-->
      <span class="project-title__name">{{project?.attributes.name}}</span>
    </div>
    <ComponentsList :componentItems="project != null ? project.attributes.body : null" />
    <div class="mt-[72px] mb-[70px] w-full flex justify-center">
      <div class="project__button">
        <router-link to="/projects"><div>Вернуться назад</div></router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import type {projectInterface} from "@/entities/dto/projects/projectInterface";
import {responseProject} from "@/app/http/request";
import router from "@/app/router";
import ComponentsList from "@/widgets/components/ComponentsList.vue";

let project = ref<projectInterface | null>(null)

async function getProject(id: string | string[])
{
  let answer = await responseProject(Array.isArray(id) ? parseInt(id[0]) : parseInt(id))
  project.value = answer.data
}

getProject(router.currentRoute.value.params.id)


window.scrollBy(0,0)
</script>

<style lang="postcss" scoped>
.background
{
  transform: translateX(-50%);
  width: calc(100vw + 20px);
  @apply absolute left-[50%] top-[-240px] z-[-1] h-[10000%] object-cover;
}
.project {
  &-title {
    @apply flex items-center lg:mt-[60px] mt-[32px];

    &__link {
      @apply pr-[16px] lg:pr-[30px];
      & img
      {
        @apply lg:w-[15px] lg:h-[25px] w-[16px] h-[16px];
      }
    }

    &__name {
      @apply text-[#14161F] text-[30px] lg:text-[56px];
    }
  }
  &__button
  {
    @apply flex justify-between ;
    & a {
      position: relative;
      height: 58px;
      background-color: #FFF;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: skew(-18deg);
      border: 1px solid #438CB4;
      border-right: 5px solid #438CB4;
      border-bottom: 5px solid #438CB4;
      transition: all .2s ease;
      @apply w-[308px];
      &:hover {
        transform: skew(-18deg) translateY(2px);
        border-right: 1px solid #438CB4;
        border-bottom: 1px solid #438CB4;
      }
      div {
        color:#438CB4;
        transform: skew(18deg);
        position: absolute;
        top: 20%;
        left: 22%;
        @apply absolute text-[#438CB4] w-[200px] text-[22px];
        &.active
        {
          @apply text-[#438CB4] text-[22px];
        }
        img
        {
          width: 19px;
          height: 20px;
        }
      }
    }
  }

}
</style>