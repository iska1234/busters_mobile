import {  StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import { Image, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import styles from './Styles'
import { CustomTextInput } from "../../../components/CustomTextInput";
import { RoundedButton } from "../../../components/RoundedButton";
import { useEffect, useState } from "react";
import useViewModel from './ViewModel';
import { ModalPickImage } from "../../../components/ModalPickImage";

interface Props extends StackScreenProps<RootStackParamList, 'ProfileUpdateScreen'> { };

export const ProfileUpdateScreen = ({ navigation, route }: Props) => {

    const { user } = route.params;
    const {
        name,
        lastname,
        image,
        loading,
        errorMessage,
        dni,
        onChange,
        pickImage,
        takePhoto,
        onChangeInfoUpdate,
        update,
        successMessage
    } = useViewModel(user);
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        if (errorMessage != '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        }
    }, [errorMessage])

    useEffect(() => {
        if (successMessage != '') {
            ToastAndroid.show(successMessage, ToastAndroid.LONG)
        }
    }, [successMessage])


    useEffect(() => {
        onChangeInfoUpdate(user?.name!, user?.lastname!, user?.dni!)
    }, [user]);

    const handleUpdate = async () => {
        await update();
    };

    return (
        <View style={styles.container}>
            <Image
                source={require("../../../../../assets/choferes_update.jpg")}
                style={styles.imageBackground}
            />
            <View style={styles.logoContainer}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          style={styles.logoImage}
          source={
            !image
              ? require('../../../../../assets/user_image.png')
              : { uri: image }
          }
        />
      </TouchableOpacity>
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
                    onChangeText={onChange}
                />
                <CustomTextInput
                    image={require("../../../../../assets/description.png")}
                    value={dni}
                    placeholder='Dni'
                    keyboard='default'
                    property='dni'
                    onChangeText={onChange}
                />
                <View
                    style={{ marginTop: 30 }}
                >

                    <RoundedButton text='ACTUALIZAR INFORMACIÓN' onPress={handleUpdate} />
                </View>


            </View>
            <ModalPickImage
                openGallery={pickImage}
                openCamera={takePhoto}
                modalUseState={modalVisible}
                setModalUseState={setModalVisible}
            />
        </View>
    )
}