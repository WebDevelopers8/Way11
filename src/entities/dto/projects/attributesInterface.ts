interface attributesInterface {
    name: string,
    shortDescription: string,
    description : string,
    technologies: Array<{
        id: number,
        name: string,
    }>,
    body: Array<{
        id: number,
        "__component": string,
        title: string,
    }>,
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