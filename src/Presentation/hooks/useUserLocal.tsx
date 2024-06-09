import { useEffect, useState } from "react";
import { GetUserUseCase } from "../../Domain/useCases/userLocal/GetUser";
import { IUsersRes } from '../../Domain/entities/User';
import { SessionPayload } from "../../Domain/entities/SessionPayload";

export const useUserLocal = () => {

    const [user, setUser] = useState<SessionPayload>()

    useEffect(()=>{
        getUserSession();
    }, [])

    const getUserSession = async () => {
        const user = await GetUserUseCase();
        setUser(user);
    };
    
    return {user}
}