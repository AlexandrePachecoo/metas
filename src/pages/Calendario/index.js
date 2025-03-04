import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { auth } from "../../firebaseConnection";
import { signOut } from "firebase/auth";
import { AuthContext } from "../../contexts/auth";

export default function Calendario() {
    const { setUser } = useContext(AuthContext);

    async function sair() {
        try {
            await signOut(auth);
            setUser({
                email: '',
                uid: '',
                signed: false
            });
        } catch (error) {
            console.log("Erro ao sair:", error);
        }
    }

    return (
        <View>
            <Text> Calendário </Text>
            <TouchableOpacity onPress={sair}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}
