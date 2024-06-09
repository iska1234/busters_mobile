import { useEffect, useState } from "react";
import { RemoveUserLocalUseCase } from "../../../Domain/useCases/userLocal/RemoveUserLocal";
import { GetUserDataRemoteUseCase } from "../../../Domain/useCases/userRemote/GetDataUser";
import { useUserLocal } from "../../hooks/useUserLocal";
import { IUsersRes } from "../../../Domain/entities/User";


const ProfileInfoViewModel = () => {
    const { user } = useUserLocal();
    const [userData, setUserData] = useState<IUsersRes | null>(null);
    const userId = user?.userId;
  
    const removeSession = async () => {
      await RemoveUserLocalUseCase();
    };
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          if (userId !== undefined) {
            const response = await GetUserDataRemoteUseCase(userId); 
            const userData = response.data
            setUserData(userData);
          }
        } catch (error) {
          console.error('Error al obtener los datos del usuario remoto:', error);
        }
      };
  
      fetchUserData();
    }, [userId]);
  
    return {
      removeSession,
      user,
      userData,
    };
  };

export default ProfileInfoViewModel