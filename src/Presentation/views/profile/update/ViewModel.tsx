import { useState } from "react";
import { useUserLocal } from "../../../hooks/useUserLocal";

const ProfileUpdateViewModel = () => {
  const { user, getUserSession } = useUserLocal();
  const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        image: '',
        password: '',
        confirmPassword: '',
    });
    const [loading, setLoading] = useState(false);
    const onChange = (property: string, value: any) => {
      setValues({ ...values, [property]: value })
  }
  const isValidForm = (): boolean => {
    if (values.name === '') {
        setErrorMessage('Ingresa tu nombre');
        return false;
    }
    if (values.lastname === '') {
        setErrorMessage('Ingresa tu apellido');
        return false;
    }
    if (values.email === '') {
        setErrorMessage('Ingresa tu correo electronico');
        return false;
    }
    if (values.phone === '') {
        setErrorMessage('Ingresa tu telefono');
        return false;
    }
    if (values.password === '') {
        setErrorMessage('Ingresa la contraseña');
        return false;
    }
    if (values.confirmPassword === '') {
        setErrorMessage('Ingresa la confirmacion de la contraseña');
        return false;
    }
    if (values.password !== values.confirmPassword) {
        setErrorMessage('Las contraseñas no coinciden');
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
  user
}
    };
  
  export default ProfileUpdateViewModel