import { UserRemoteRepositoryImpl } from "../../../Data/repositories/UserRemoteRepository";
import * as ImagePicker from 'expo-image-picker'
import { IUsersRes } from "../../entities/User";

const { updateWithImage } = new UserRemoteRepositoryImpl();

export const UpdateUserWithImage = async (user: IUsersRes, userId: number, file: ImagePicker.ImagePickerAsset) => {
    return await updateWithImage(user, userId, file);
}