<template>
  <div class="flex flex-col mt-[80px]">
    <ProjectItem v-for="(item, index) in projects" :key="index" :project="item" />
  </div>
</template>

<script setup lang="ts">
import type {projectType} from "@/entities/types/projectType/projectType";
import ProjectItem from "@/widgets/projectItem/ProjectItem.vue";

const props = defineProps<{
  projects: Array<projectType>
}>()
</script>

<style lang="postcss" scoped>

</style>