import { useEffect, useState } from "react";

import { IUsersRes } from '../../Domain/entities/User';
import { SessionPayload } from "../../Domain/entities/SessionPayload";
import { GetUserLocalUseCase } from "../../Domain/useCases/userLocal/GetUserLocal";

export const useUserLocal = () => {

    const [user, setUser] = useState<SessionPayload>()

    useEffect(()=>{
        getUserSession();
    }, [])

    const getUserSession = async () => {
        const user = await GetUserLocalUseCase();
        setUser(user);
    };
    
    return {user, getUserSession}
}