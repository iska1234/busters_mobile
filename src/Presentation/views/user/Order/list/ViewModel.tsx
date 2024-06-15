import React, { useContext, useState } from 'react'
import { Orders } from '../../../../../Domain/entities/Orders';
import { GetByUserUseCase } from '../../../../../Domain/useCases/orders/GetByUser';
import { UserContext } from '../../../../context/UserContext';
import { OrderContext } from '../../../../context/OrderContext';

const OrderListViewModel = () => {

    //const [address, setAddress] = useState<Orders[]>([])
    const { user } = useContext(UserContext);
    const {ordersOnTheWay, ordersInProgress, ordersCompleted, getOrderByStatus} = useContext(OrderContext)

    const getOrders = async (status: string) => { 
        const result = await getOrderByStatus(user.id!, status);
        //setAddress(result);
    }



    return {
        ordersOnTheWay,
        ordersInProgress,
        ordersCompleted,
        getOrders
    }
}

export default OrderListViewModel