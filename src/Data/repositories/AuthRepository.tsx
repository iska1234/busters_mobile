import { AxiosError } from "axios";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiBusters } from "../sources/remote/api/BustersBack";
import { ResponseApiBusters } from "../sources/remote/models/ResponseApiBusters";
import { LocalStorage } from "../sources/local/LocalStorage";
import { decodeToken } from "../sources/local/Decoder";
import { UserLocalRepositoryImpl } from "./UserLocalRepository";


export class AuthRepositoryImpl implements AuthRepository {
    async login(email: string, password: string): Promise<ResponseApiBusters> {
        try {
            const response = await ApiBusters.post<ResponseApiBusters>('/auth/login', {
                email: email,
                password: password
            });
            const token = response.data.data.token;
            
            const { save } = LocalStorage();
            await save('token', token);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            const apiError:ResponseApiBusters = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError)
        }
    }
}