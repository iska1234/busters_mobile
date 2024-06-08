import { AxiosError } from "axios";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiBusters } from "../sources/remote/api/BustersBack";
import { ResponseApiBusters } from "../sources/remote/models/ResponseApiBusters";


export class AuthRepositoryImpl implements AuthRepository {

    async login(email: string, password: string): Promise<ResponseApiBusters> {
        try {
            const response = await ApiBusters.post<ResponseApiBusters>('/auth/login', {
                email: email,
                password: password
            });
            return Promise.resolve(response.data);
        } catch (error) {
            const axiosError = error as AxiosError<ResponseApiBusters>;
            if (axiosError.response && axiosError.response.data) {
                return axiosError.response.data;
            }

            return Promise.resolve({
                success: false,
                message: "Error desconocido",
                error: {
                    message: axiosError.message
                }
            })
        }
    }
}