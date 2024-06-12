import React, { useContext, useEffect, useState } from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/Auth/LoginAuth'

import { useUserLocal } from '../../hooks/useUserLocal'
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal'
import { UserContext } from '../../context/UserContext'


const HomeViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [values, setValues] = useState({ email: '', password: '' })
    //const {userLocal, getUserSession} = useUserLocal()

    const {user,  saveUserSession, getUserSession} = useContext(UserContext)

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }

    const login = async () => {
        if (isValidForm()) {
            const response = await LoginAuthUseCase(values.email, values.password);
            if (!response.success) {
                setErrorMessage(response.message);
            } else {
               saveUserSession(response.data)
               getUserSession()
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
        errorMessage,
        user
    }
}

export default HomeViewModel