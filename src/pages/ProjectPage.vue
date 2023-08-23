<template>
  <img class="background" src="@/shared/images/projects/background.png">
  <div class="project">
    <div class="container">
      <h1 class="project__title">ВСЕ НАШИ <span class="project__title-project">ПРОЕКТЫ</span></h1>
      <div class="project-filter">
        <button :class="{active:stateFilter == 0}" class="project-filter__button" @click="() => {stateFilter = 0; changeProject(stateFilter)}">Все проекты</button>
        <button :class="{active:stateFilter == 1}" class="project-filter__button" @click="() => {stateFilter = 1; changeProject(stateFilter)}">Вебинарные платформы</button>
        <button :class="{active:stateFilter == 2}" class="project-filter__button" @click="() => {stateFilter = 2; changeProject(stateFilter)}">Промо-сайты</button>
        <button :class="{active:stateFilter == 3}" class="project-filter__button" @click="() => {stateFilter = 3; changeProject(stateFilter)}">Корпоративные сайты</button>
        <button :class="{active:stateFilter == 4}" class="project-filter__button" @click="() => {stateFilter = 4; changeProject(stateFilter)}">Платформы</button>
      </div>
      <ProjectList :projects="projects" />
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import ProjectList from "@/widgets/projectList/ProjectList.vue";
import type {projectType} from "@/entities/types/projectType/projectType";

const stateFilter = ref(0)

const projects : Array<projectType> = [{id: "0", name: "Lancelot", type: "Вебинарная платформа", description: "На платформе Lancelot пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей пройдет рассылка с напоминанием.", stack: ["AWS Chalice", "Lambda", "Aurora Serverless Postgres", "API Gateway", "DynamoDB", "WebSockets", "Python", "Git", "React"]}]

function changeProject(id: number)
{

}
</script>

<style lang="postcss" scoped>
.background
{
  transform: translateX(-50%);
  width: calc(100vw + 20px);
  @apply absolute left-[50%] top-[-240px] z-[-1] h-[1300px];
}

.project{
  @apply mt-[100px];
  &__title
  {
    -webkit-text-stroke: 2px #14161F;
    line-height: 64px;
    letter-spacing: 0.6px;
    @apply text-[60px] text-[#FFF] font-bold;
    &-project
    {
      -webkit-text-stroke: 0px #14161F;
      @apply text-[#000] font-bold
    }
  }
  &-filter
  {
    line-height: 24px;
    letter-spacing: 0.18px;
    @apply flex gap-[32px] mt-[5px];
    &__button
    {
      @apply text-[#14161F] text-[18px];
      &.active
      {
        @apply font-bold text-[#5BB6F1];
      }
    }
  }
}
</style>