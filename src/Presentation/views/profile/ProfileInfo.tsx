import React, { useEffect, useState } from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import useViewModel from './ViewModel'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import styles from './Styles'
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { GetUserDataRemoteUseCase } from '../../../Domain/useCases/userRemote/GetDataUser';

export const ProfileInfoScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { removeSession, user, userData } = useViewModel();

    return (
        <View style={styles.container}>

            <Image
                source={require('../../../../assets/chofer.png')}
                style={styles.imageBackground}
            />
            <TouchableOpacity
            style={styles.logout}
                onPress={() => {
                    removeSession()
                    navigation.navigate('HomeScreen')
                }}
            >
            <Image
                source={require('../../../../assets/logout.png')}
                style={styles.logoutImage}
                />
            </TouchableOpacity>

            <View style={styles.logoContainer}>
                <Image
                    style={styles.logoImage}
                    source={require('../../../../assets/user_image.png')}
                />
            </View>

            <View style={styles.form}>
                <View style={styles.formInfo}>
                    <Image 
                        source={require('../../../../assets/user.png')}
                        style={styles.formIcon}
                    />
                    <View style={styles.formContent}>
                        <Text>{userData?.name} {userData?.lastname}</Text>
                        <Text style={styles.formTextDescription}>Nombre del usuario</Text>
                    </View>
                </View>
                <View style={{...styles.formInfo, marginTop:25}}>
                    <Image 
                        source={require('../../../../assets/email.png')}
                        style={styles.formIcon}
                    />
                    <View style={styles.formContent}>
                        <Text>{userData?.email}</Text>
                        <Text style={styles.formTextDescription}>Correo Electronico</Text>
                    </View>
                </View>
                <View style={{...styles.formInfo, marginTop:25, marginBottom:40}}>
                    <Image 
                        source={require('../../../../assets/description.png')}
                        style={styles.formIcon}
                    />
                    <View style={styles.formContent}>
                        <Text>{userData?.dni}</Text>
                        <Text style={styles.formTextDescription}>Dni</Text>
                    </View>
                </View>
                <RoundedButton 
                onPress={()=>{}}
                text="Actualizar Información"
            />
            </View>
         
            {/* <Button
               
                title='Cerrar Sesión'
            /> */}
        </View>
    )
}
