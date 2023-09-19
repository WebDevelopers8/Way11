import axios from 'axios'

const eternalToken = '9a9e3e2f9a92926d67c861bff5bbc5ca3e5cf89f12bf69acb5f7975677d666808f09a81373facbe9e01f18a5f28b53f1d0bb3ad73fa300b3565592d52c34c7fe3b7f1889b6a299bad514ab1024e262d0df022a9fc0764e5bc287ee38c0696fd54fe87f26a02233721f8b3afb47fa475f9b98b081a6d7822e13d36802cc4366da'

const $host = axios.create({
    baseURL: 'https://admin.studioway11.com',
    headers: {Authorization: "Bearer " + eternalToken}
})

export { $host }