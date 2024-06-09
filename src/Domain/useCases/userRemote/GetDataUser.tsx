
import { UserRemoteRepositoryImpl } from "../../../Data/repositories/UserRemoteRepository";


const { getUserData } = new UserRemoteRepositoryImpl();


export const GetUserDataRemoteUseCase = async (userId: number) => {
    return await getUserData(userId);
}