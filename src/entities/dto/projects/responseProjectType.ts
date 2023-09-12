import type {projectInterface} from "@/entities/dto/projects/projectInterface";
import type {paginationInterface} from "@/entities/dto/projects/paginationInterface";

type responseProjectType = {
    data:projectInterface,
    meta: {
        pagination: paginationInterface
    }
}

export type {responseProjectType}