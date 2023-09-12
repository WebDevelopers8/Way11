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
    dateOfRelease?: string,
    categories: {
        data: Array<{
            attributes:{
                name: string
            }
        }>
    }
    mainImage: {
        data: {
            url: string,
        }
    },
    gallery: {data: Array<{id: number, attributes: {url: string}}>}
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