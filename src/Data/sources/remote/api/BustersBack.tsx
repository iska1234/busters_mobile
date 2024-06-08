import axios from 'axios'

const ApiBusters = axios.create({
    baseURL:'http://localhost:5500',
    headers:{
        'Content-Type':'application/json'
    }
})

export {ApiBusters}