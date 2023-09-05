import axios from 'axios'

const $host = axios.create({
    baseURL: 'https://api-platform.про-образование.com'
})

export { $host }