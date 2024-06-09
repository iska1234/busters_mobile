import { SessionPayload } from "../../Domain/entities/SessionPayload";
import { UserLocalRepository } from "../../Domain/repositories/UserLocalRepository";
import { decodeToken } from "../sources/local/Decoder";
import { LocalStorage } from "../sources/local/LocalStorage";

export class UserLocalRepositoryImpl implements UserLocalRepository {

    async save(payload: SessionPayload): Promise<void> {
        try {
            const { getItem } = LocalStorage();
            const token = await getItem('token');
            const payload = decodeToken(token || '');
            const { save } = LocalStorage();
            const user = { userId: payload.userId, role: payload.role };
            await save('user', JSON.stringify(user));
        } catch (error) {
            console.error('Error saving user data:', error);
            throw error;
        }
    }
    async getUser(): Promise<SessionPayload> {
        const { getItem } = LocalStorage();
        const data = await getItem('user');
        const user: SessionPayload = JSON.parse(data as any);
        return user;
    }

    async remove(): Promise<void> {
        const {remove} = LocalStorage();
        await remove('user')
        await remove('token')
    }

}