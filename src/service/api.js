import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/'
})

export const postform = axios.create({
    baseURL: 'https://webhook.site/bb98ff42-0c71-4838-a1bd-068984f38afe'
})

