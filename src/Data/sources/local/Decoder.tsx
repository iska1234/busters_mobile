import { jwtDecode } from "jwt-decode";
import { SessionPayload } from "../../../Domain/entities/SessionPayload";


export function decodeToken(token: string): SessionPayload {
    return jwtDecode(token);
}
