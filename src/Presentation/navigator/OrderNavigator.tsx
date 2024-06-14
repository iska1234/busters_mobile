import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OrderListScreen } from '../views/user/Order/list/OrderList';
// import { OrderDetailScreen } from '../views/user/Order/detail/OrderDetail';
import { Orders } from '../../Domain/entities/Orders';
import { OrderAddressMapScreen } from '../views/user/Order/map/OrderMap';


export type OrderStackParamList = {
    OrderListScreen: undefined,
    // OrderDetailScreen: {order: Orders},
    OrderAddressMapScreen: {order: Orders}
}

const Stack = createNativeStackNavigator<OrderStackParamList>();

export const OrderStackNavigator = () => {
    return (

                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen
                        name="OrderListScreen"
                        component={OrderListScreen}
                    />
                    {/* <Stack.Screen
                        name="OrderDetailScreen"
                        component={OrderDetailScreen}
                        options={{
                            headerShown: true,
                            title: 'Detalle de la Orden'
                        }}
                    /> */}
                     <Stack.Screen
                        name="OrderAddressMapScreen"
                        component={OrderAddressMapScreen}
                    />
                </Stack.Navigator>

    )

}

