import React, { useEffect } from 'react'
import { Image, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import styles from './Styles'
import useViewModel from './ViewModel'
import stylesMap from './StylesMap';
import { StackScreenProps } from '@react-navigation/stack'
import { OrderStackParamList } from '../../../../navigator/OrderNavigator'
import { RoundedButton } from '../../../../components/RoundedButton'

interface Props extends StackScreenProps<OrderStackParamList, 'OrderAddressMapScreen'> { };
export const OrderAddressMapScreen = ({ navigation, route }: Props) => {

  const { messagePermissions, position, mapRef, stopForegroundUpdate } = useViewModel();
  const { order } = route.params;

  useEffect(() => {
    if (messagePermissions != '') {
      ToastAndroid.show(messagePermissions, ToastAndroid.LONG);
    }
  }, [messagePermissions]);

  useEffect(() => {
    const unsuscribe = navigation.addListener('beforeRemove', () => {
      console.log('Evento Before Remove')
      stopForegroundUpdate();
    })

    return unsuscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        customMapStyle={stylesMap}
        style={{ height: '64%', width: '100%', position: 'absolute', top: 0 }}
        provider={PROVIDER_GOOGLE}
      >
        {
          position !== undefined &&
          <Marker
            style={styles.markerImage}
            coordinate={position}
          >
            <Image
              style={styles.markerImage}
              source={require('../../../../../../assets/chofer_1.png')}
            />
          </Marker>
        }

      </MapView>



      <View style={styles.info}>
        <View style={styles.infoRow}>
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>Direccion de Entrega</Text>
            <Text style={styles.infoDescription}>{order.reference} - {order.reference}</Text>
          </View>
          <Image
            style={styles.infoImage}
            source={require('../../../../../../assets/location.png')}
          />
        </View>


        <View style={styles.divider}></View>

        <View style={styles.infoClient}>
          <Image
            style={styles.imageClient}
            source={require('../../../../../../assets/user.png')}
          />
          <Text style={styles.nameClient}>Client Name</Text>
          <Image
            style={styles.imageClient}
            source={require('../../../../../../assets/phone.png')}
          />
        </View>
        <View style={styles.buttonRefPoint}>
          <RoundedButton
            text='ENTREGAR PEDIDO'
            onPress={() => { }}
          />
        </View>

      </View>
      <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>

        <Image
          style={styles.back}
          source={require('../../../../../../assets/previous.png')}
        />
      </TouchableOpacity>
    </View>
  )
}
