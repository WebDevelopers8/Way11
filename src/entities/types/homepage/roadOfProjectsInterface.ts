interface roadOfProjectsInterface {
    id: number,
    project: {
        data: {
            id: number,
            attributes: {
                name: string,
                shortDescription: string,
                description: string,
                dateOfRelease: string,
                technologies: Array<{
                    id: number,
                    name: string,
                }>,
                categories: {
                    data: Array<{
                        id: number,
                        attributes: {
                            name: string
                        }
                    }>
                }
                gallery: {
                    data: Array<{
                        id: number,
                        attributes: {
                            url: string,
                        }
                    }>
                }
            }
        }
    }
}

export type {roadOfProjectsInterface}
