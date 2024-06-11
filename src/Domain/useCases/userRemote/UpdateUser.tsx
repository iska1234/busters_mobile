import { UserRemoteRepositoryImpl } from "../../../Data/repositories/UserRemoteRepository";
import { IUsersRes } from "../../entities/User";

const { updateUser } = new UserRemoteRepositoryImpl();

export const UpdateUser= async (user: IUsersRes, userId: number) => {
    return await updateUser(user, userId);
}