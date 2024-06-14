import React, { useContext, useEffect, useRef, useState } from 'react'
import * as Location from 'expo-location'
import MapView, { Camera } from 'react-native-maps';
import socket from '../../../utils/SocketIO'
import { UserContext } from '../../../context/UserContext';

const ClientAddressMapViewModel = () => {

  const { user } = useContext(UserContext);
  const [messagePermissions, setMessagePermissions] = useState('');
  const [position, setPosition] = useState<Location.LocationObjectCoords>()
  const [refPoint, setRefPoint] = useState({
    name: '',
    latitude: 0.0,
    longitude: 0.0,
    });
  const [origin, setOrigin] = useState({
    latitude: 0.0,
    longitude: 0.0
  })


  
  const mapRef = useRef<MapView | null>(null)
  let positionSuscription: Location.LocationSubscription;

  useEffect(() => {

    socket.connect();
    socket.on('connect',() =>{
      console.log('usuario conectado de address')
    })

    const requestPermissions = async () => {
      const foreground = await Location.requestForegroundPermissionsAsync();

      if (foreground.granted) {
        startForegroundUpdate();
      }
    }

    requestPermissions();

  }, [])

  

  const startForegroundUpdate = async () => {
    const { granted } = await Location.getForegroundPermissionsAsync()

    if (!granted) {
      setMessagePermissions('Permiso de ubicación denegado')
      return;
    }

    const location = await Location.getLastKnownPositionAsync()
    setPosition(location?.coords);
    setOrigin({
      latitude: location?.coords.latitude!,
      longitude: location?.coords.longitude!,
    })
    const newCamera: Camera = {
      center: { latitude: location?.coords.latitude!, longitude: location?.coords.longitude! },
      zoom: 14,
      heading: 0,
      pitch: 0,
      altitude: 0
    }
    mapRef.current?.animateCamera(newCamera, { duration: 2000 })

    positionSuscription?.remove();

    positionSuscription = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.Balanced
      },
      location => {
        socket.emit('position-test', {
          
          lat: location.coords.latitude,
          lng: location.coords.longitude
        })

        setPosition(location?.coords)
      }
    )
  }

  const onRegionChangeComplete = async (latitude: number, longitude: number) => {
    try {
        const place = await Location.reverseGeocodeAsync({
            latitude: latitude,
            longitude: longitude
        });

        let city;
        let street;
        let streetNumber;

        place.find(p => {
            city = p.city;
            street = p.street;
            streetNumber = p.streetNumber;
            setRefPoint({
                name: `${street}, ${streetNumber}, ${city}`,
                latitude: latitude,
                longitude: longitude
            });
        })

    } catch (error) {
        console.log('ERROR: ' + error);
    }
}

  const stopForegroundUpdate = () => {
    positionSuscription?.remove()
    setPosition(undefined)
  }

  return {
    messagePermissions,
    position,
    mapRef,
    ...refPoint,
    origin,
    socket,
    onRegionChangeComplete,
    stopForegroundUpdate
  }
}

export default ClientAddressMapViewModel