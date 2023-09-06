import axios from 'axios'
import {$host} from "@/app/http/index"
import type {responseProjectType} from "@/entities/dto/projects/responseProjectType";
import type {attributesInterface} from "@/entities/dto/projects/attributesInterface";
import type {contactType} from "@/entities/dto/contact/contactType";

const responseProjects = async (page: number, pageSize: number) => {

    const {data} = await $host.get<responseProjectType>(`/api/projects?pagination%5Bpage%5D=${page}&pagination%5BpageSize%5D=${pageSize}`)
    return data
}

const responseProject = async (id: number)=> {

    const {data} = await $host.get<{id: number, attributes: attributesInterface}>("/api/projects/" + id)
    return data
}

const responseContact = async () => {

    const {data} = await $host.get<contactType>('api/contact')
    return data
}

export {responseProjects, responseProject, responseContact}