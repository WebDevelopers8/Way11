import type {bodyInterface} from "@/entities/dto/projects/bodyInterface";

interface attributesInterface {
    name: string,
    shortDescription: string,
    description : string,
    technologies: Array<{
        id: number,
        name: string,
    }>,
    body: Array<bodyInterface>,
    mainImage: {
        data: {
            url: string,
        }
    },
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    createdBy: {
        data: {
            id: number,
            attributes: {}
        }
    },
    updatedBy: {
        data: {
            id: number,
            attributes: {}
        }
    },
}

export type {attributesInterface}