import React, { useEffect } from 'react'
import { Image, ToastAndroid, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import styles from './Styles'
import stylesMap from './StylesMap';
import useViewModel from './ViewModel'
import { StackScreenProps } from '@react-navigation/stack';
import { OrderStackParamList } from '../../../navigator/OrderNavigator';


export const ClientAddressMapScreen = () => {

  const { messagePermissions, position, mapRef, stopForegroundUpdate, socket,  } = useViewModel();


  useEffect(() => {
    if(messagePermissions != ''){
      ToastAndroid.show(messagePermissions, ToastAndroid.LONG);
    }
  }, [messagePermissions]);

  // useEffect(() => {
  //   return () => {
  //     console.log('Componente se está desmontando');
  //     stopForegroundUpdate();
  //     socket.disconnect();
  //   }
  // }, []);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        customMapStyle={stylesMap}
        style={{ height: '100%', width: '100%', position: 'absolute', top: 0 }}
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
              source={require('../../../../../assets/chofer_1.png')}
            />
          </Marker>
        }
      </MapView>
    </View>
  )
}
