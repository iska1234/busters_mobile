import React from 'react'
import { OrdersRepositoryImpl } from '../../../Data/repositories/OrdersRepository'

const {getByUser} = new OrdersRepositoryImpl();

export const GetByUserUseCase = async(userId: number, status:string) => {
  return await getByUser(userId, status);
}
