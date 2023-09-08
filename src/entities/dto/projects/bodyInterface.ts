interface bodyInterface{
    id: number,
    "__component": string,
    title?: string,
    text?: string,
    image?: {data: {attributes: {url: string}, id: number}},
    leftImage?: {data: {attributes: {url: string}, id:number}},
    rightImage?: {data: {attributes: {url: string}, id: number}},
    leftTitle?: string,
    leftText?: string,
    rightTitle?: string,
    rightText?: string,
}

export type {bodyInterface}