import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import { MyColors } from '../../theme/AppTheme';
import { RoundedButton } from '../../components/RoundedButton';

export const HomeScreen = () => {

    return (
        <View style={styles.container}>
          <Image
            source={require('../../../assets/chofer.png')}
            style={styles.imageBackground}
          />
    
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImage}
              source={require('../../../assets/logo.png')}
            />
          </View>
    
          <View style={styles.form}>
            <Text style={styles.formText}>Ingresar</Text>
            <View style={styles.formInput}>
              <Image
                style={styles.formIcon}
                source={require('../../../assets/email.png')}
              />
              <TextInput style={styles.formTextInput}
                placeholder='Correo Electronico'
                keyboardType='email-address'
              />
            </View>
    
            <View style={styles.formInput}>
              <Image
                style={styles.formIcon}
                source={require('../../../assets/password.png')}
              />
              <TextInput style={styles.formTextInput}
                placeholder='Contraseña'
                keyboardType='default'
                secureTextEntry={true}
              />
            </View>
            <View
              style={{ marginTop: 30 }}
            >
    
              <RoundedButton text='INGRESAR' onPress={() => ToastAndroid} />
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
        height: '100%',
        opacity: 0.6,
        bottom: '30%'
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
    