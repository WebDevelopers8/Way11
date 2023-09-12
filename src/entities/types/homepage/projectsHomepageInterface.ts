import type {roadOfProjectsInterface} from "@/entities/types/homepage/roadOfProjectsInterface";

interface projectsHomepageInterface {
    id: number,
    attributes: {
        roadOfProjects: Array<roadOfProjectsInterface>
    }
}

export type {projectsHomepageInterface}