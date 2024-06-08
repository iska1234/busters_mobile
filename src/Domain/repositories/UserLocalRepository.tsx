import { SessionPayload } from "../entities/SessionPayload";

export interface UserLocalRepository {
    save(payload: SessionPayload): Promise<void>;
    getUser(): Promise<SessionPayload>;
}