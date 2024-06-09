import { UserRemoteRepository } from "../../Domain/repositories/UserRemoteRepository";
import { IUsersRes } from "../../Domain/entities/User";
import { ApiBusters } from "../sources/remote/api/BustersBack";



export class UserRemoteRepositoryImpl implements UserRemoteRepository {
    async getUserData(userId: number): Promise<IUsersRes> {
        try {
            const response = await ApiBusters.get<IUsersRes>(`/users/data/${userId}`);
            return Promise.resolve(response.data);
          
        } catch (error: any) {
            throw new Error("Error al obtener los datos del usuario: " + error.message);
        }
    }

}