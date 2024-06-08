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
            
            // Save token to local storage
            const { save } = LocalStorage();
            await save('token', token);
            return Promise.resolve(response.data);

        } catch (error) {
            console.error("Login error:", error);
            const axiosError = error as AxiosError<ResponseApiBusters>;
            if (axiosError.response && axiosError.response.data) {
                console.error("Axios error response data:", axiosError.response.data);
                return axiosError.response.data;
            }

            console.error("Unknown error:", axiosError.message);
            return Promise.resolve({
                success: false,
                message: "Error desconocido",
                error: {
                    message: axiosError.message
                }
            });
        }
    }
}