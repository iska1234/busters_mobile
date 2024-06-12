import { Orders } from "../entities/Orders";

export interface OrdersRepository {
    getByUser(userId: number, status:string): Promise<Orders[]>;
}