import type {projectInterface} from "@/entities/dto/projects/projectInterface";
import type {paginationInterface} from "@/entities/dto/projects/paginationInterface";

type responseProjectsType = {
    data:Array<projectInterface>,
    meta: {
        pagination: paginationInterface
    }
}

export type {responseProjectsType}