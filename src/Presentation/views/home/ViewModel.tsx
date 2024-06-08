import React, { useEffect, useState } from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/Auth/LoginAuth'
import { SaveUserUseCase } from '../../../Domain/useCases/userLocal/SaveUser'
import { GetUserUseCase } from '../../../Domain/useCases/userLocal/GetUser'


const HomeViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [values, setValues] = useState({ email: '', password: '' })

    useEffect(()=>{
        getUserSession();
    }, [])

    const getUserSession = async () => {
        const user = await GetUserUseCase();
        console.log('session:'+ user?.role+ user?.userId)
    };
    

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }

    const login = async () => {
        if (isValidForm()) {
            const response = await LoginAuthUseCase(values.email, values.password);
            if (!response.success) {
                setErrorMessage(response.message);
            } else {
                const responseData = response.data;
                await SaveUserUseCase(responseData);
            }
        }
    };

    const isValidForm = (): boolean => {

        if (values.email === '') {
            setErrorMessage('Ingresa el correo electronico')
            return false;
        }

        if (values.password === '') {
            setErrorMessage('Ingresa la contraseña')
            return false;
        }

        return true;
    }

    return {
        ...values,
        onChange,
        login,
        errorMessage
    }
}

export default HomeViewModel