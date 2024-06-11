import { UserRemoteRepository } from "../../Domain/repositories/UserRemoteRepository";
import { IUsersRes } from "../../Domain/entities/User";
import { ApiBusters, ApiBustersImage } from "../sources/remote/api/BustersBack";
import { ImagePickerAsset } from "expo-image-picker";
import { ResponseApiBusters } from "../sources/remote/models/ResponseApiBusters";
import mime from 'mime'
import { AxiosError } from "axios";
import * as ImagePicker from 'expo-image-picker'

export class UserRemoteRepositoryImpl implements UserRemoteRepository {


    async getUserData(userId: number): Promise<IUsersRes> {
        try {
            const response = await ApiBusters.get<IUsersRes>(`/users/data/${userId}`);
            return Promise.resolve(response.data);
          
        } catch (error: any) {
            throw new Error("Error al obtener los datos del usuario: " + error.message);
        }
    }

    async updateUser(user: IUsersRes, userId: number): Promise<ResponseApiBusters> {
        try {
            const response = await ApiBusters.put<ResponseApiBusters>(`/users/update/${userId}`, user);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            const apiError: ResponseApiBusters = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async updateWithImage(user: IUsersRes, userId: number, file: ImagePicker.ImagePickerAsset): Promise<ResponseApiBusters> {
        try {
            let data = new FormData();
            if (file) {
                const uri = file.uri;
                const name = uri.split('/').pop();
                const type = mime.getType(uri);
                data.append('photo', {
                    uri,
                    name,
                    type
                } as any);
            }
            data.append('name', user.name);
            data.append('lastname', user.lastname);
            data.append('dni', user.dni);

            const response = await ApiBustersImage.put<ResponseApiBusters>(`/users/update-image/${userId}`, data);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            const apiError: ResponseApiBusters = JSON.parse(JSON.stringify(e.response?.data));
            return apiError;
        }
    }
    

}