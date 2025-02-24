import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

import { useNavigation } from '@react-navigation/native';



export default function SignIn() {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.box}>

                <Text style={styles.titulo}>Crie a sua conta</Text>

                <View style={styles.input}>
                    <AntDesign name="user" size={25} color="#000" />
                    <TextInput style={styles.boxInput} placeholder="Nome:" />
                </View>

                <View style={styles.input}>
                    <AntDesign name="mail" size={25} color="#000" />
                    <TextInput style={styles.boxInput} placeholder="Digite seu email:" />
                </View>

                <View style={styles.input}>
                    <AntDesign name="lock" size={25} color="#000" />
                    <TextInput style={styles.boxInput} placeholder="Digite sua senha:" />
                </View>

                <TouchableOpacity style={styles.btnEntrar}>
                    <Text style={styles.txtEntrar}>Criar conta</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    titulo: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 30
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    input: {
        height: 48,
        width: 329,
        borderRadius: 23,
        borderColor: '#000',
        borderWidth: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 15,
        paddingTop: 5

    },
    boxInput: {
        marginTop: -30,
        marginLeft: 40,
        width: 250,

    },
    btnEntrar: {
        backgroundColor: '#000',
        justifyContent: 'center',
        height: 40,
        width: 129,
        borderRadius: 100,
        marginTop: 40
    },
    txtEntrar: {
        textAlign: 'center',
        color: "#fff"
    },
   
})