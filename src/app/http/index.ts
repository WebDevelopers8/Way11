import axios from 'axios'

const eternalToken = '10b7292de4c76a49bf43119de01a1d27d29e4039b1355502dcfb43e71abaedb49479c01466a1b61662ec17051870f8e51845bf0c0667d0b958bafcd78c36a9c5bacdeacc29c07918aa8d74668650fb5a34241a5888713206190638b2c749c3e492aff1a4633297d489b02e2c169a1ce0fecbaafc6f04f13655d818bfc3e3ea9e'

const $host = axios.create({
    baseURL: 'https://admin.studioway11.com',
    headers: {Authorization: "Bearer " + eternalToken}
})

export { $host }