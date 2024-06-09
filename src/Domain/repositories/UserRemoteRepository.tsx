import { IUsersRes } from "../entities/User";

export interface UserRemoteRepository{

    getUserData(userId: number): Promise<IUsersRes>;
}