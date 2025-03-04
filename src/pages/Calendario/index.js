import React, {useState, useContext}from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {auth} from "../../firebaseConnection"
import {signOut} from "firebase/auth";
import {AuthContext} from "../../contexts/auth";

export default function Calendario() {

    async function sair(){
        await signOut(auth)
        setUserId({
            email: '',
            uid: '',
            signed: false
        })

    }

    return(
        <View>
            <Text> calendario </Text>
            <TouchableOpacity onPress={sair}> <Text>sair</Text></TouchableOpacity>
        </View>
    )
}