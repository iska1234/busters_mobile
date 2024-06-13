import React from 'react';
import { Orders } from '../../../../../Domain/entities/Orders';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DateFormatter } from '../../../../utils/DateFormatter';
import { StackNavigationProp } from '@react-navigation/stack';
import { OrderStackParamList } from '../../../../navigator/OrderNavigator';

interface Props {
    order: Orders;
    navigation: StackNavigationProp<OrderStackParamList, 'OrderListScreen', undefined>
}

export const OrderListItem = ({ order, navigation }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('OrderDetailScreen',{order: order})}
        >
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.order}>Order #{order.id}</Text>
                    <Text style={styles.info}>Fecha del pedido: {DateFormatter(order.timestamp!)}</Text>
                    <Text style={styles.info}>Dirección: {order.reference}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 15
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    order: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
        marginBottom: 5,
    },
    info: {
        fontSize: 14,
        marginBottom: 5,
    },
});

export default OrderListItem;
