import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import { MyColors } from '../../theme/AppTheme';
import { RoundedButton } from '../../components/RoundedButton';
import { useEffect, useState } from 'react';
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../App';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack'
import { UserProvider } from '../../context/UserContext';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'>{};

export const HomeScreen = ({navigation, route}: Props) => {

    const { email, password, onChange, errorMessage, login, user } = useViewModel(); 

    useEffect(() => {
        if (errorMessage != '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        }
    }, [errorMessage])

    useEffect(() => {
        if(user?.id !== null && user?.id !== undefined && user?.id !== 0){
            navigation.replace('UserTabsNavigation')
        }
    },[user])

    return (
        <View style={styles.container}>

            <Image
                source={require('../../../../assets/busters.png')}
                style={styles.imageBackground}
            />

            <View style={styles.logoContainer}>
                <Image
                    style={styles.logoImage}
                    source={require('../../../../assets/logo.png')}
                />
            </View>

            <View style={styles.form}>
                <Text style={styles.formText}>Get into</Text>
                <CustomTextInput
                    image={require("../../../../assets/email.png")}
                    value={email}
                    placeholder='Email'
                    keyboard='email-address'
                    property='email'
                    onChangeText={onChange}
                />
                <CustomTextInput
                    image={require("../../../../assets/password.png")}
                    value={password}
                    placeholder='Password'
                    keyboard='default'
                    property='password'
                    secureTextEntry={true}
                    onChangeText={onChange}
                />
                <View
                    style={{ marginTop: 30 }}
                >

                    <RoundedButton text='LOG IN' onPress={() => login()} />
                </View>


            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },

    imageBackground: {
        width: '100%',
        height: '80%',
        bottom: '0%'
    },
    form: {
        width: '100%',
        height: '40%',
        backgroundColor: MyColors.background,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%'
    },
    logoImage: {
        width: 255,
        height: 120
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15
    },

});
