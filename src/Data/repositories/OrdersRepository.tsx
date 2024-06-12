import { AxiosError } from 'axios';
import { Orders } from '../../Domain/entities/Orders';
import { OrdersRepository } from '../../Domain/repositories/OrdersRepository';
import { ApiBusters } from '../sources/remote/api/BustersBack';
export class OrdersRepositoryImpl implements OrdersRepository{

    async getByUser(userId: number, status:string): Promise<Orders[]> {
        try {
            const response = await ApiBusters.get<{ data: Orders[] }>(`/orders/status/${status}/user/${userId}`);
            return Promise.resolve(response.data.data);
        } catch (error) {
            let e = (error as AxiosError);
            return Promise.resolve([]);
        }
    }

}