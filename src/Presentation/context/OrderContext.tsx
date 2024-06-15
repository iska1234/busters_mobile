import { createContext, useState } from "react";
import { Orders } from "../../Domain/entities/Orders";
import { GetByUserUseCase } from "../../Domain/useCases/orders/GetByUser";

export interface OrderContextProps{
    ordersOnTheWay: Orders[],
    ordersInProgress: Orders[],
    ordersCompleted: Orders[],
    getOrderByStatus(userId: number, status:string): Promise<void>,

}

export const OrderContext = createContext({} as OrderContextProps);

export const OrderProvider = ({children}:any) => {
    // case 'first':
    //     return <OrderListView status='EN CAMINO' />
    // case 'second':
    //     return <OrderListView status='EN PROCESO' />
    // case 'third':
    //     return <OrderListView status='COMPLETADA' />
    const [ordersOnTheWay, setOrdersOnTheWay] = useState<Orders[]>([]);
    const [ordersInProgress, setOrdersInProgress] = useState<Orders[]>([]);
    const [ordersCompleted, setOrdersCompleted] = useState<Orders[]>([]);

    const getOrderByStatus = async (userId: number, status:string) =>{
        const result = await GetByUserUseCase(userId, status)
        if(status === 'EN CAMINO'){
            setOrdersOnTheWay(result);
        }
        if(status === 'EN PROCESO'){
            setOrdersInProgress(result);
        }
        if(status === 'COMPLETADA'){
            setOrdersCompleted(result);
        }
    }

    return(
        <OrderContext.Provider
            value={{
                ordersOnTheWay,
                ordersInProgress,
                ordersCompleted,
                getOrderByStatus
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}