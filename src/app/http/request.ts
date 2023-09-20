import {$host} from "@/app/http/index"
import type {responseProjectsType} from "@/entities/dto/projects/responseProjectsType";
import type {contactType} from "@/entities/dto/contact/contactType";
import type {responseProjectType} from "@/entities/dto/projects/responseProjectType";
import type {categoriesType} from "@/entities/types/categories/categoriesType";
import type {homepageType} from "@/entities/types/homepage/homepageType";
//@ts-ignore
import qs from "qs"
import type {dataType} from "@/entities/types/dataForm/dataType";
import type {dataFormDto} from "@/entities/dto/dataFormDto/dataFormDto";

const responseProjects = async (name: string, page: number, pageSize: number) => {
    if (name == 'all') {
        const {data} = await $host.get<responseProjectsType>(`/api/projects?pagination%5Bpage%5D=${page}&pagination%5BpageSize%5D=${pageSize}&populate=*&sort[0]=name:asc`)
        return data
    } else {
        const {data} = await $host.get<responseProjectsType>(`/api/projects?filters[categories][name]=${name}&pagination%5Bpage%5D=${page}&pagination%5BpageSize%5D=${pageSize}&populate=*&sort[0]=name:asc`)
        return data
    }
}

const responseProject = async (id: number) => {

    const {data} = await $host.get<responseProjectType>("/api/projects/" + id + "?populate[body][populate]=image&populate[body][populate]=rightImage&populate[body][populate]=leftImage")
    return data
}

const responseHomepage = async () => {
    const query = qs.stringify({
        populate: {
            roadOfProjects: {
                populate: {
                    project: {
                        populate: ["technologies", "gallery", "categories"]
                    }
                }
            }
        }
    })
    const result = await $host.get<homepageType | number>(`/api/homepage?${query}`).catch((error) => {
        if (error.response.status == 404) {
            return 404
        }
        if (error.response.status == 500) {
            return 500
        }
        return 404
    })
    return typeof result != 'number' ? result.data : result
}

const responseCategories = async () => {
    const {data} = await $host.get<categoriesType>('/api/categories?populate=*&sort[0]=name:asc')
    return data.data
}

const responseContact = async () => {

    const {data} = await $host.get<contactType>('/api/contact')
    return data
}

const sendForm = async (dataForm: dataType) => {
    const response = await $host.post<dataFormDto>('/api/leads', dataForm).catch((error) => {
        if (error.response.status == 404) {
            return 404
        }
        if (error.response.status == 500) {
            return 500
        }
        return 404
    })
    return typeof response != 'number' ? response.data : response
}

const sendFile = async (file : File) => {
    const fileForm = new FormData()
    fileForm.append('files', file)
    const {data} = await $host.post('/api/upload', fileForm)
    return data[0].id
}

export {responseProjects, responseProject, responseContact, responseHomepage, responseCategories, sendForm, sendFile}