import axios from 'axios'

const ApiBusters = axios.create({
    baseURL:'http://192.168.1.40:5500',
    headers:{
        'Content-Type':'application/json'
    }
})

export {ApiBusters}
