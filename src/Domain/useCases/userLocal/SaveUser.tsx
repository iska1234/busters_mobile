import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { SessionPayload } from "../../entities/SessionPayload";

const {save} = new UserLocalRepositoryImpl();

export const SaveUserUseCase = async(payload: SessionPayload) => {
    
    return await save(payload);
}