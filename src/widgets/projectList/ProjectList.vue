<template>
  <div class="flex flex-col lg:mt-[80px] mt-[36px] gap-[56px]" v-if="projects.length != 0">
    <ProjectItem v-for="item of projects" :key="item.id" :project="item" />
  </div>
</template>

<script setup lang="ts">
import ProjectItem from "@/widgets/projectItem/ProjectItem.vue";
import type { projectInterface } from "@/entities/dto/projects/projectInterface";

const props = defineProps<{
  projects: Array<projectInterface>
}>()
</script>

<style lang="postcss" scoped>

</style>