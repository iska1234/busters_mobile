import { useEffect, useState } from "react";
import { SessionPayload } from "../../Domain/entities/SessionPayload";
import { GetUserLocalUseCase } from "../../Domain/useCases/userLocal/GetUserLocal";

export const useUserLocal = () => {

    const [userLocal, setUserLocal] = useState<SessionPayload>()

    useEffect(()=>{
        getUserSession();
    }, [])

    const getUserSession = async () => {
        const user = await GetUserLocalUseCase();
        setUserLocal(user);
    };
    
    return {userLocal, getUserSession}
}