import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import useViewModel from './ViewModel'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import styles from './Styles'
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';

export const ProfileInfoScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { removeSession, user} = useViewModel();


    return (
        <View style={styles.container}>

            <Image
                source={require('../../../../assets/chofer.png')}
                style={styles.imageBackground}
            />

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
                    <View>
                        <Text>{user?.role}</Text>
                        <Text>Rol del usuario</Text>
                    </View>
                </View>
            </View>
            <Button
                onPress={() => {
                    removeSession()
                    navigation.navigate('HomeScreen')
                }}
                title='Cerrar Sesión'
            />
        </View>
    )
}
