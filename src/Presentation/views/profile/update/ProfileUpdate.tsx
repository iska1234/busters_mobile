import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import { Image, Text, ToastAndroid, View } from "react-native";
import styles from './Styles'
import { CustomTextInput } from "../../../components/CustomTextInput";
import { RoundedButton } from "../../../components/RoundedButton";
import { useEffect, useState } from "react";
import useViewModel from './ViewModel';

export const ProfileUpdateScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { name, lastname, email, image, phone, password, confirmPassword, loading, errorMessage, user, onChange, } = useViewModel();
    const [modalVisible, setModalVisible] = useState(false)
    // useEffect(()=>{
    //     if(errorMessage != ''){
    //         ToastAndroid.show(errorMessage, ToastAndroid.LONG)
    //     }
    // }, [errorMessage])

    return (
        <View style={styles.container}>
            <Image
                source={require("../../../../../assets/choferes_update.jpg")}
                style={styles.imageBackground}
            />
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logoImage}
                    source={require('../../../../../assets/user_image.png')}
                />
                <Text style={styles.logoText}>Selecciona una Imagen</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.formText}>Actualizar Datos</Text>
                <CustomTextInput
                    image={require("../../../../../assets/user.png")}
                    value={name}
                    placeholder='Nombres'
                    keyboard='default'
                    property='name'
                    onChangeText={onChange}
                />
                <CustomTextInput
                    image={require("../../../../../assets/user.png")}
                    value={lastname}
                    placeholder='Apellidos'
                    keyboard='default'
                    property='lastname'
                    secureTextEntry={true}
                    onChangeText={onChange}
                />
                <CustomTextInput
                    image={require("../../../../../assets/password.png")}
                    value={password}
                    placeholder='Contraseña'
                    keyboard='default'
                    property='password'
                    secureTextEntry={true}
                    onChangeText={onChange}
                />
                <View
                    style={{ marginTop: 30 }}
                >

                    <RoundedButton text='ACTUALIZAR INFORMACIÓN' onPress={() => {}} />
                </View>


            </View>
        </View>
    )
}