import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { SessionPayload } from "../../entities/SessionPayload";

const {getUser} = new UserLocalRepositoryImpl();


export const GetUserUseCase = async () => {
    return await getUser();
}