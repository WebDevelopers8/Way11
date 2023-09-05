import type {projectInterface} from "@/entities/dto/projects/projectInterface";

type responseProjectType = {
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

export type {responseProjectType}