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
        height: '60%',
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
        width: 150,
        height: 150,
        borderRadius:100
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    formIcon: {
        width: 40,
        height: 40,
    },
    formInfo: {
        flexDirection:'row'
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
})

export default ProfileInfoStyles;