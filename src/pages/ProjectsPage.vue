<template>
  <img :class="{bgSize:projectListState.length < 4}" class="background" src="@/shared/images/projects/background.png">
  <div class="project" id="project">
    <div class="container">
      <h1 class="project__title">ВСЕ НАШИ <span class="project__title-project">ПРОЕКТЫ</span></h1>
      <div class="project-filter">
        <button :class="{active:stateFilter == 0}" class="project-filter__button"
                @click="() => {stateFilter = 0; nameFilter = 'all'; changeProject(stateFilter);}">Все проекты
        </button>
        <button v-for="(category, categoryIndex) of categoriesList"
                :key="categoryIndex"
                :class="{active:stateFilter == categoryIndex + 1}"
                class="project-filter__button"
                @click="() => {stateFilter = categoryIndex + 1; nameFilter = category.attributes.name; changeProject(1); }"
        >
          {{category.attributes.name}}
        </button>
      </div>
      <div v-if="projectListState != null && projectListState.length != 0">
        <ProjectList :projects="projectListState"/>
      </div>
      <div>
        <PaginationVue @updatePage="(changedPage : number) => {page = changedPage; getProjects()}" :currPage="page"
                       :maxPages="maxPages"/>
      </div>
    </div>
  </div>
    <FooterVue/>
</template>

<script setup lang="ts">

import {ref} from "vue";
import ProjectList from "@/widgets/projectList/ProjectList.vue";
import FooterVue from "@/widgets/footer/FooterVue.vue";
import {responseCategories, responseProjects} from "@/app/http/request";
import PaginationVue from "@/widgets/pagination/PaginationVue.vue";
import {useProjectStore} from "@/entities/stores/projectStore/projectStore";
import {storeToRefs} from "pinia";
import type {categoryInterface} from "@/entities/types/categories/categoryInterface";

const stateFilter = ref(0)
const page = ref(1)
const maxPages = ref(2)
const nameFilter = ref('all')

const projectStore = useProjectStore()
const { projectListState } = storeToRefs(projectStore)
const categoriesList = ref<Array<categoryInterface>>([])

async function getProjects() {
  let answer = await responseProjects(nameFilter.value, page.value, 4)
  projectStore.loadProjects(answer.data)
  page.value = answer.meta.pagination.page
  maxPages.value = answer.meta.pagination.pageCount
}

async function getCategories() {
  categoriesList.value = await responseCategories()
}

getCategories()
getProjects()

function changeProject(id: number) {
  switch (id) {
    case 0:
      getProjects()
      break;
    case 1:
      findProjects(nameFilter.value)
      break;
  }
}

async function findProjects(categoryName: string) {
  page.value = 1
  let answer = await responseProjects(categoryName, page.value, 4)
  projectStore.loadProjects(answer.data)
  page.value = answer.meta.pagination.page
  maxPages.value = answer.meta.pagination.pageCount
}
</script>

<style lang="postcss" scoped>
@media (max-width: 1000px) {
  .bgSize
  {
    height: 81% !important;
  }
}
.background {
  transform: translateX(-50%);
  width: calc(100vw + 20px);
  @apply absolute left-[50%] top-[-240px] z-[-1] lg:h-[99%] h-[93%] lg:object-bottom object-cover;
}

.back-arrow {
  transform: rotate(180deg);
}

.project {
  @apply lg:mt-[100px] mt-[40px] mb-[50px];

  &__title {
    -webkit-text-stroke: 1.5px #14161F;
    @apply lg:leading-[64px] leading-[36px] lg:tracking-[0.6px] lg:text-[60px] text-[30px] text-[#FFF] font-bold;

    &-project {
      -webkit-text-stroke: 0px #14161F;
      @apply text-[#000] font-bold
    }
  }

  &-filter {
    line-height: 24px;
    @apply lg:tracking-[0.18px] tracking-[0.16px] flex lg:gap-[32px] gap-[8px_32px] mt-[24px] lg:mt-[5px] lg:flex-nowrap flex-wrap;

    &__button {
      @apply text-[#14161F] text-[16px] lg:text-[18px];

      &.active {
        @apply font-bold text-[#5BB6F1];
      }
    }
  }

  &__button {
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
        color: #fff;
        transform: skew(18deg);
        position: absolute;
        font-weight: 300;
        top: 30%;
        @apply lg:left-[40%] left-[35%];

        img {
          width: 19px;
          height: 20px;
        }
      }
    }
  }

  &__number {
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

      &.active {
        border: 2px solid #438CB4;
      }

      div {
        color: #438CB4;
        transform: skew(18deg);
        position: absolute;
        top: 20%;
        left: 45%;
        @apply absolute text-[#000] text-[22px];

        &.active {
          @apply text-[#438CB4] text-[22px];
        }

        img {
          width: 19px;
          height: 20px;
        }
      }
    }
  }
}
</style>