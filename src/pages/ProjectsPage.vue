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
      <div class="flex justify-center mt-[80px] gap-[10px]">
        <div class="project__button">
          <button class="bg-[#5BB6F1]"><div><img src="@/shared/images/projects/arrow.svg" alt="arrow"></div></button>
        </div>
        <div class="project__number">
          <button class="active"><div class="active">1</div></button>
        </div>
        <div class="project__number">
          <button><div>2</div></button>
        </div>
        <div class="project__number">
          <button><div>3</div></button>
        </div>
        <div class="project__button">
          <button><div><img class="back-arrow" src="@/shared/images/projects/arrow.svg" alt="arrow"></div></button>
        </div>
        </div>
    </div>
  </div>
  <FooterVue />
</template>

<script setup lang="ts">

import {ref} from "vue";
import ProjectList from "@/widgets/projectList/ProjectList.vue";
import type {projectType} from "@/entities/types/projectType/projectType";
import FooterVue from "@/widgets/footer/FooterVue.vue";

const stateFilter = ref(0)

const projects : Array<projectType> = [
  {id: "0", name: "Lancelot", type: "Вебинарная платформа", description: "На платформе Lancelot пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей пройдет рассылка с напоминанием.", stack: ["AWS Chalice", "Lambda", "Aurora Serverless Postgres", "API Gateway", "DynamoDB", "WebSockets", "Python", "Git", "React"]},
  {id: "0", name: "Lancelot", type: "Вебинарная платформа", description: "На платформе Lancelot пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей пройдет рассылка с напоминанием.", stack: ["AWS Chalice", "Lambda", "Aurora Serverless Postgres", "API Gateway", "DynamoDB", "WebSockets", "Python", "Git", "React"]},
  {id: "0", name: "Lancelot", type: "Вебинарная платформа", description: "На платформе Lancelot пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей пройдет рассылка с напоминанием.", stack: ["AWS Chalice", "Lambda", "Aurora Serverless Postgres", "API Gateway", "DynamoDB", "WebSockets", "Python", "Git", "React"]},
  {id: "0", name: "Lancelot", type: "Вебинарная платформа", description: "На платформе Lancelot пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей пройдет рассылка с напоминанием.", stack: ["AWS Chalice", "Lambda", "Aurora Serverless Postgres", "API Gateway", "DynamoDB", "WebSockets", "Python", "Git", "React"]}

]

function changeProject(id: number)
{

}
</script>

<style lang="postcss" scoped>
.background
{
  transform: translateX(-50%);
  width: calc(100vw + 20px);
  @apply absolute left-[50%] top-[-240px] z-[-1] lg:h-[97%] h-[93%] lg:object-bottom object-cover;
}
.back-arrow
{
  transform: rotate(180deg);
}

.project{
  @apply mt-[100px];
  &__title
  {
    -webkit-text-stroke: 2px #14161F;
    line-height: 64px;
    letter-spacing: 0.6px;
    @apply lg:text-[60px] sm:text-[50px] text-[35px] text-[#FFF] font-bold;
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
    @apply flex md:gap-[32px] gap-[20px] mt-[5px] lg:flex-nowrap flex-wrap;
    &__button
    {
      @apply text-[#14161F] text-[18px];
      &.active
      {
        @apply font-bold text-[#5BB6F1];
      }
    }
  }
  &__button
  {
      @apply flex justify-between ;
      & button {
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
        @apply sm:w-[86px] w-[60px];
        &:hover {
          transform: skew(-18deg) translateY(2px);
          border-right: 1px solid #438CB4;
          border-bottom: 1px solid #438CB4;
        }
        div {
          color:#fff;
          transform: skew(18deg);
          position: absolute;
          font-weight: 300;
          top: 30%;
          @apply lg:left-[40%] left-[35%];
          img
          {
            width: 19px;
            height: 20px;
          }
        }
      }
  }
  &__number
  {
    @apply flex justify-between ;
    & button {
      position: relative;
      height: 58px;
      background-color: transparent;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: skew(-18deg);
      border: 2px solid transparent;
      transition: all .2s ease;
      @apply sm:w-[86px] w-[60px];
      &.active
      {
        border: 2px solid #438CB4;
      }
      div {
        color:#438CB4;
        transform: skew(18deg);
        position: absolute;
        top: 20%;
        left: 45%;
        @apply absolute text-[#000] text-[22px];
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