import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Semana from "../../components/Semana";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.semana}>
                <Semana />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    semana: {

    },
})