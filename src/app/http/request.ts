import {$host} from "@/app/http/index"
import type {responseProjectsType} from "@/entities/dto/projects/responseProjectsType";
import type {contactType} from "@/entities/dto/contact/contactType";
import type {responseProjectType} from "@/entities/dto/projects/responseProjectType";

const responseProjects = async (page: number, pageSize: number) => {

    const {data} = await $host.get<responseProjectsType>(`/api/projects?pagination%5Bpage%5D=${page}&pagination%5BpageSize%5D=${pageSize}&populate=*`)
    return data
}

const responseProject = async (id: number)=> {

    const {data} = await $host.get<responseProjectType>("/api/projects/" + id + "?populate=*")
    return data
}

const responseContact = async () => {

    const {data} = await $host.get<contactType>('api/contact')
    return data
}

export {responseProjects, responseProject, responseContact}