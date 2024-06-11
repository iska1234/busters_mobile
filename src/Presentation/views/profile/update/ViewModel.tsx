import { useEffect, useState } from "react";
import { useUserLocal } from "../../../hooks/useUserLocal";
import * as ImagePicker from 'expo-image-picker'
import { IUsersRes } from '../../../../Domain/entities/User';
import { GetUserDataRemoteUseCase } from "../../../../Domain/useCases/userRemote/GetDataUser";

import { ToastAndroid } from "react-native";
import { UpdateUserWithImage } from "../../../../Domain/useCases/userRemote/UpdateUserImage";
import { UpdateUser } from "../../../../Domain/useCases/userRemote/UpdateUser";
import { ResponseApiBusters } from "../../../../Data/sources/remote/models/ResponseApiBusters";


const ProfileUpdateViewModel = (user: IUsersRes) => {

    const{userLocal, getUserSession} = useUserLocal();
    const [errorMessage, setErrorMessage] = useState('');
    const [userData, setUserData] = useState<IUsersRes | null>(null);
    const [values, setValues] = useState(user);
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
    const userId = userLocal?.userId;

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            if (userId !== undefined) {
              const response = await GetUserDataRemoteUseCase(userId); 
              const userData = response.data
              setUserData(userData);
            }
          } catch (error) {
            console.error('Error al obtener los datos del usuario remoto:', error);
          }
        };
    
        fetchUserData();
      }, [userId]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            onChange('image', result.assets[0].uri);
            setFile(result.assets[0]);
        }
    }

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            onChange('image', result.assets[0].uri);
            setFile(result.assets[0]);
        }
    }

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }

    const onChangeInfoUpdate = (name: string, lastname: string, dni: string) => {
        setValues({ ...values, name, lastname, dni: dni })
    }

    
    const update = async () => {
        if (isValidForm()) {
            setLoading(true);
            try {
                let response = {} as ResponseApiBusters;
                if (values.image?.includes('https://')) {
                    response = await UpdateUser(values, userId!)
                } else {
                    response = await UpdateUserWithImage(values, userId!, file!);
                }

                if (response.success) {
                    ToastAndroid.show('Usuario actualizado exitosamente', ToastAndroid.LONG);
                } else {
                    setErrorMessage(response.message || 'Error al actualizar el usuario');
                }
                
            } catch (error:any) {
                console.error('Error al actualizar el usuario:', error);
                if (error.response) {
                    setErrorMessage('Error al actualizar el usuario: ' + error.response.data.message);
                } else if (error.request) {
                    setErrorMessage('Error de conexión. Inténtalo de nuevo más tarde.');
                } else {
                    setErrorMessage('Error al actualizar el usuario. Inténtalo de nuevo más tarde.');
                }
            } finally {
                setLoading(false);
            }
        }
    };
    

    const isValidForm = (): boolean => {
        if (values.name === '') {
            setErrorMessage('Ingresa tu nombre');
            return false;
        }
        if (values.lastname === '') {
            setErrorMessage('Ingresa tu apellido');
            return false;
        }
        if (values.dni === '') {
            setErrorMessage('Ingresa tu dni');
            return false;
        }
        if (values.image === '') {
            setErrorMessage('Selecciona una imagen');
            return false;
        }

        return true;
    }
    return {
        ...values,
        onChange,
        errorMessage,
        loading,
        user,
        pickImage,
        takePhoto,
        userData,
        update,
        onChangeInfoUpdate
    }
};

export default ProfileUpdateViewModel