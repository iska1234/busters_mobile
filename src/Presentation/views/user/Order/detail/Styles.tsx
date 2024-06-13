import { StyleSheet } from "react-native";

const OrderDetail = StyleSheet.create({
    container: {
        flex: 1
    },
    products: {
        width: '100%',
        height: '40%'
    },
    info: {
        width: '100%',
        height: '60%',
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal:30
    },
    infoRow: {
        flexDirection:'row',
        marginTop:15
    },
    infoText:{
        flex:1
    },
    infoImage:{
        width:30,
        height:30
    },
    infoTitle:{
        color:'black'
    },
    infoDescription:{
        color:'gray',
        fontSize:13,
        marginTop:3
    }
})

export default OrderDetail;