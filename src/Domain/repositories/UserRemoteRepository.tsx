import { ResponseApiBusters } from "../../Data/sources/remote/models/ResponseApiBusters";

import * as ImagePicker from 'expo-image-picker'
import { User } from "../entities/User";

export interface UserRemoteRepository {

    getUserData(userId: number): Promise<User>;
    updateUser(user:User,  userId: number): Promise<ResponseApiBusters>;
    updateWithImage(user: User, userId: number, file: ImagePicker.ImagePickerAsset): Promise<ResponseApiBusters>
}