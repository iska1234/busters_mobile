import { UserRemoteRepositoryImpl } from "../../../Data/repositories/UserRemoteRepository";
import {  User } from "../../entities/User";

const { updateUser } = new UserRemoteRepositoryImpl();

export const UpdateUser= async (user: User, userId: number) => {
    return await updateUser(user, userId);
}