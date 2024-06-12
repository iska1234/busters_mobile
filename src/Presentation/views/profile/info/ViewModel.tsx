import { useContext, useEffect, useState } from "react";
import { RemoveUserLocalUseCase } from "../../../../Domain/useCases/userLocal/RemoveUserLocal";
import { GetUserDataRemoteUseCase } from "../../../../Domain/useCases/userRemote/GetDataUser";
import { useUserLocal } from "../../../hooks/useUserLocal";
import {  User } from "../../../../Domain/entities/User";
import { UserContext } from "../../../context/UserContext";


const ProfileInfoViewModel = () => {
    const { user, removeUserSession } = useContext(UserContext);
    //const [userData, setUserData] = useState<User | null>(null);
    //const userId = userLocal?.userId;
  

  
    // useEffect(() => {
    //   const fetchUserData = async () => {
    //     try {
    //       if (userId !== undefined) {
    //         const response = await GetUserDataRemoteUseCase(userId); 
    //         const userData = response.data
    //         setUserData(userData);
    //       }
    //     } catch (error) {
    //       console.error('Error al obtener los datos del usuario remoto:', error);
    //     }
    //   };
  
    //   fetchUserData();
    // }, [userId]);
    // const removeSession = async () => {
    //   await RemoveUserLocalUseCase();
    // };
    return {
      removeUserSession,
      user
    };
  };

export default ProfileInfoViewModel