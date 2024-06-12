import { createContext, useEffect, useState } from "react";
import { User } from "../../Domain/entities/User";
import { SaveUserLocalUseCase } from "../../Domain/useCases/userLocal/SaveUserLocal";
import { SessionPayload } from "../../Domain/entities/SessionPayload";
import { GetUserLocalUseCase } from "../../Domain/useCases/userLocal/GetUserLocal";
import { RemoveUserLocalUseCase } from "../../Domain/useCases/userLocal/RemoveUserLocal";
import { GetUserDataRemoteUseCase } from "../../Domain/useCases/userRemote/GetDataUser";

export const userInitialState: User = {
    id: 0,
    name: '',
    lastname: '',
    email: '',
    password: '',
    role: '',
    dni: '',
    image: '',
    created_at: '',
    updated_at: '',
    data: '',
};

export interface UserContextProps {
    user: User;
    saveUserSession: (user: User) => Promise<void>;
    getUserSession: () => Promise<void>;
    removeUserSession: () => Promise<void>;
}

export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: any) => {
    const [user, setUser] = useState<User>(userInitialState);

    useEffect(() => {
        getUserSession();
    }, []);

    const saveUserSession = async (user: User) => {
        try {
            const sessionPayload: SessionPayload = {
                userId: user.id,
                role: user.role,
            };
            await SaveUserLocalUseCase(sessionPayload);
            setUser(user);
            getUserSession();
        } catch (error) {
            console.error('Error saving user session:', error);
        }
    };

    const getUserSession = async () => {
        try {
            const sessionPayload = await GetUserLocalUseCase();
            if (sessionPayload) {
                const userId = sessionPayload.userId;
                const userDataResponse = await GetUserDataRemoteUseCase(userId);
                const userData = userDataResponse.data;

                const user: User = {
                    ...userInitialState,
                    ...userData,
                    id: sessionPayload.userId,
                    role: sessionPayload.role,
                };
                setUser(user);
            }
        } catch (error) {
            console.error('Error getting user session:', error);
        }
    };

    const removeUserSession = async () => {
        try {
            await RemoveUserLocalUseCase();
            setUser(userInitialState);
        } catch (error) {
            console.error('Error removing user session:', error);
        }
    };

    return (
        <UserContext.Provider value={{
            user,
            saveUserSession,
            getUserSession,
            removeUserSession
        }}>
            {children}
        </UserContext.Provider>
    );
};
