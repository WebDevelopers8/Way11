import type { projectInterface } from "@/entities/dto/projects/projectInterface";
import { defineStore } from "pinia";
import {ref} from 'vue'

export const useProjectStore = defineStore('project-list', () => {

    const projectListState = ref<Array<projectInterface>>([])

    function loadProjects(projects : Array<projectInterface>) {
        projectListState.value = projects
    }
    
    return {projectListState, loadProjects}
})