import type {projectInterface} from "@/entities/dto/projects/projectInterface";

type projectType = {
    data:Array<projectInterface>,
    meta: {
        pagination: {
            page: number,
            pageSize: number,
            pageCount: number,
            total: number
        }
    }
}

export type {projectType}