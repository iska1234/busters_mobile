import React from 'react'
import { Image, KeyboardType, StyleSheet, TextInput, View } from 'react-native'

interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboard: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onChangeText: (property: string, value: any) => void
}

export const CustomTextInput = ({
    image, placeholder, value, keyboard, secureTextEntry = false, property, onChangeText
}: Props) => {
    return (
        <View style={styles.formInput}>
            <Image
                style={styles.formIcon}
                source={image}
            />
            <TextInput style={styles.formTextInput}
                placeholder={placeholder}
                keyboardType={keyboard}
                value={value}
                secureTextEntry={secureTextEntry}
                onChangeText={text => onChangeText(property, text)}
            />
        </View>
    )
}


const styles = StyleSheet.create({
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
})