import React, { useContext, useState } from 'react'
import { Orders } from '../../../../../Domain/entities/Orders';
import { GetByUserUseCase } from '../../../../../Domain/useCases/orders/GetByUser';
import { UserContext } from '../../../../context/UserContext';

const OrderListViewModel = () => {

    const [address, setAddress] = useState<Orders[]>([])
    const { user } = useContext(UserContext);

    const getAddress = async (status: string) => { 
        const result = await GetByUserUseCase(user.id!, status);
        setAddress(result);
    }
    return {
        address,
        getAddress
    }
}

export default OrderListViewModel