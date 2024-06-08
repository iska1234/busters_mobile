import { ResponseApiBusters } from "../../Data/sources/remote/models/ResponseApiBusters";

export interface AuthRepository{

    login(email:string, password:string): Promise<ResponseApiBusters>;
}