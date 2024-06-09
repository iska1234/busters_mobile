import { StyleSheet } from "react-native";
import { MyColors } from "../../theme/AppTheme";


const ProfileInfoStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        height: '45%',
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
        top: '10%'
    },
    logoImage: {
        width: 180,
        height: 180,
        borderRadius: 100
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    formIcon: {
        width: 30,
        height: 30,
    },
    formInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30
    },
    formTextDescription: {
        fontSize: 14,
        color: 'gray'
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15
    },
    formContent: {
        marginLeft: 15,

    },
    logout:{
       
        position:'absolute',
        top:15,
        right:15
    },
    logoutImage:{
        width:40,
        height:40,
    }
})

export default ProfileInfoStyles;