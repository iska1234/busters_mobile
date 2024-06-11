import axios from 'axios'
import { LocalStorage } from '../../local/LocalStorage';
import { IUsersRes } from '../../../../Domain/entities/User';

const ApiBusters = axios.create({
    baseURL: 'http://192.168.1.40:5500',
    headers: {
        'Content-Type': 'application/json'
    }
});

const ApiBustersImage = axios.create({
    baseURL: 'http://192.168.1.40:5500',
    headers: {
        'Content-type': 'multipart/form-data',
        'accept': 'application/json',
    }
});

ApiBusters.interceptors.request.use(
    async (config) => {
        const token = await LocalStorage().getItem('token');
        if (token) {
            config.headers!['Authorization'] = token as string;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

ApiBustersImage.interceptors.request.use(
    async (config) => {
        const token = await LocalStorage().getItem('token');
        if (token) {
            config.headers!['Authorization'] = token as string;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { ApiBusters, ApiBustersImage };