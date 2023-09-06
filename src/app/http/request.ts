import axios from 'axios'
import {$host} from "@/app/http/index"
import type {responseProjectType} from "@/entities/dto/projects/responseProjectType";
import type {contactType} from "@/entities/dto/contact/contactType";
import type {projectInterface} from "@/entities/dto/projects/projectInterface";

const responseProjects = async (page: number, pageSize: number) => {

    const {data} = await $host.get<responseProjectType>(`/api/projects?pagination%5Bpage%5D=${page}&pagination%5BpageSize%5D=${pageSize}&populate=*`)
    return data
}

const responseProject = async (id: number)=> {

    const {data} = await $host.get<projectInterface>("/api/projects/" + id + "?populate=*")
    return data
}

const responseContact = async () => {

    const {data} = await $host.get<contactType>('api/contact')
    return data
}

export {responseProjects, responseProject, responseContact}