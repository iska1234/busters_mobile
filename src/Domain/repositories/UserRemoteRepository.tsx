import { ResponseApiBusters } from "../../Data/sources/remote/models/ResponseApiBusters";
import { IUsersRes } from "../entities/User";
import * as ImagePicker from 'expo-image-picker'

export interface UserRemoteRepository {

    getUserData(userId: number): Promise<IUsersRes>;
    updateUser(user:IUsersRes,  userId: number): Promise<ResponseApiBusters>;
    updateWithImage(user: IUsersRes, userId: number, file: ImagePicker.ImagePickerAsset): Promise<ResponseApiBusters>
}