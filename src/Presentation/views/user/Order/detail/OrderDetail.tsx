// import React from 'react'
// import { Image, Text, View } from 'react-native'
// import styles from './Styles';
// import { StackScreenProps } from '@react-navigation/stack';
// import { OrderStackParamList } from '../../../../navigator/OrderNavigator';
// import { DateFormatter } from '../../../../utils/DateFormatter';
// import { RoundedButton } from '../../../../components/RoundedButton';

// interface Props extends StackScreenProps<OrderStackParamList, 'OrderDetailScreen'>{};

// export const OrderDetailScreen = ({navigation, route}: Props) => {

//   const {order} = route.params;

//   return (
//     <View style={styles.container}>
//         <View style={styles.products}></View>
//         <View style={styles.info}>
//           <View style={styles.infoRow}>
//             <View style={styles.infoText}>
//               <Text style={styles.infoTitle}>Fecha del Pedido</Text>
//               <Text style={styles.infoDescription}>{DateFormatter(order.timestamp!)}</Text>
//             </View>
//             <Image 
//               style={styles.infoImage}
//               source={require('../../../../../../assets/reloj.png')}
//             />
//           </View>
        
//           <View style={styles.infoRow}>
//             <View style={styles.infoText}>
//               <Text style={styles.infoTitle}>Cliente y télefono</Text>
//               <Text style={styles.infoDescription}>{order.reference} - {order.reference}</Text>
//             </View>
//             <Image 
//               style={styles.infoImage}
//               source={require('../../../../../../assets/user.png')}
//             />
//           </View>

//           <View style={styles.infoRow}>
//             <View style={styles.infoText}>
//               <Text style={styles.infoTitle}>Direccion de Entrega</Text>
//               <Text style={styles.infoDescription}>{order.reference} - {order.reference}</Text>
//             </View>
//             <Image 
//               style={styles.infoImage}
//               source={require('../../../../../../assets/location.png')}
//             />
//           </View>
//           <RoundedButton
//             text="Ir a la Ruta" onPress={() => navigation.navigate('OrderAddressMapScreen', {order:order})}
//           />
          
//         </View>
//     </View>
//   )
// }
