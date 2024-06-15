import React, { useEffect,  } from 'react'
import {  Image, Text, TouchableOpacity, View } from 'react-native'
import useViewModel from './ViewModel'
import { StackNavigationProp, } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import styles from './Styles'
import { RoundedButton } from '../../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';


export const ProfileInfoScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { removeUserSession, user } = useViewModel();

    useEffect(() => {
        if (user.id === 0 && user !== undefined) {
            navigation.navigate('HomeScreen')
        }
    }, [user])

    return (
        <View style={styles.container}>

            <Image
                source={require('../../../../../assets/chofer.png')}
                style={styles.imageBackground}
            />
            <TouchableOpacity
                style={styles.logout}
                onPress={() => {
                    removeUserSession()

                }}
            >
                <Image
                    source={require('../../../../../assets/logout.png')}
                    style={styles.logoutImage}
                />
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logoImage}
                    source={
                        !user.image
                            ? require('../../../../../assets/user_image.png')
                            : { uri: user.image }
                    }
                />
            </View>
            <View style={styles.form}>
                <View style={styles.formInfo}>
                    <Image
                        source={require('../../../../../assets/user.png')}
                        style={styles.formIcon}
                    />
                    <View style={styles.formContent}>
                        <Text>{user?.name} {user?.lastname}</Text>
                        <Text style={styles.formTextDescription}>User names</Text>
                    </View>
                </View>
                <View style={{ ...styles.formInfo, marginTop: 25 }}>
                    <Image
                        source={require('../../../../../assets/email.png')}
                        style={styles.formIcon}
                    />
                    <View style={styles.formContent}>
                        <Text>{user?.email}</Text>
                        <Text style={styles.formTextDescription}>Email</Text>
                    </View>
                </View>
                <View style={{ ...styles.formInfo, marginTop: 25, marginBottom: 40 }}>
                    <Image
                        source={require('../../../../../assets/description.png')}
                        style={styles.formIcon}
                    />
                    <View style={styles.formContent}>
                        <Text>{user?.dni}</Text>
                        <Text style={styles.formTextDescription}>ID</Text>
                    </View>
                </View>
                <RoundedButton
                    onPress={() => {
                        navigation.navigate('ProfileUpdateScreen', { user: user! })
                    }}
                    text="UPDATE INFORMATION"
                />
            </View>
        </View>
    )
}
