import React from 'react'
import { Orders } from '../../../../Domain/entities/Orders'
import { StyleSheet, Text, View } from 'react-native'
import { DateFormatter } from '../../../utils/DateFormatter'

interface Props{
    order: Orders
}
export const OrderListItem = ({order}: Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.order}>Order #{order.id}</Text>
        <Text style={{...styles.info, marginTop:10}}>Fecha del pedido {DateFormatter(order.timestamp!)}</Text>
        <Text style={styles.info}>Direccion: {order.reference}</Text>
        <View style={styles.divider}></View>
    </View>
  )
}


const styles= StyleSheet.create({
    container:{
        marginHorizontal:20
    },
    order:{
        fontWeight:'bold',
        color:'black',
        fontSize:18,
        marginTop:10
    },
    divider:{
        height:1,
        width:'100%',
        backgroundColor:'#e2e2e2',
        marginVertical:10
    },
    info:{
        fontSize:13
    }
})