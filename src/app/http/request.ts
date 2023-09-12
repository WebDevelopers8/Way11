import {$host} from "@/app/http/index"
import type {responseProjectsType} from "@/entities/dto/projects/responseProjectsType";
import type {contactType} from "@/entities/dto/contact/contactType";
import type {responseProjectType} from "@/entities/dto/projects/responseProjectType";

const responseProjects = async (name: string,page: number, pageSize: number) => {
    if(name == 'all')
    {
        const {data} = await $host.get<responseProjectsType>(`/api/projects?pagination%5Bpage%5D=${page}&pagination%5BpageSize%5D=${pageSize}&populate=*&sort[0]=name:asc`)
        return data
    } else {
        const {data} = await $host.get<responseProjectsType>(`/api/projects?filters[categories][name]=${name}&pagination%5Bpage%5D=${page}&pagination%5BpageSize%5D=${pageSize}&populate=*&sort[0]=name:asc`)
        return data
    }
}

const responseProject = async (id: number)=> {

    const {data} = await $host.get<responseProjectType>("/api/projects/" + id + "?populate[body][populate]=image&populate[body][populate]=rightImage&populate[body][populate]=leftImage")
    return data
}

const responseContact = async () => {

    const {data} = await $host.get<contactType>('api/contact')
    return data
}

export {responseProjects, responseProject, responseContact}