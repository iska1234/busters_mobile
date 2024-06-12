import { UserRemoteRepositoryImpl } from "../../../Data/repositories/UserRemoteRepository";
import * as ImagePicker from 'expo-image-picker'
import { User } from "../../entities/User";

const { updateWithImage } = new UserRemoteRepositoryImpl();

export const UpdateUserWithImage = async (user: User, userId: number, file: ImagePicker.ImagePickerAsset) => {
    return await updateWithImage(user, userId, file);
}