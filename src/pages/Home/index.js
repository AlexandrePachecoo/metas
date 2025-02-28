import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Semana from "../../components/Semana";
import Tarefas from "../../components/tarefas";

export default function Home() {
    return (
        <View style={styles.container}>
            <Semana />
            <View style={styles.titulos}>
                <Text style={styles.tasks}>Tarefas:</Text>
                <Text style={styles.concluido}>0/4 concluido</Text>
            </View>
            <Tarefas />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E7F1F9",
    },
    titulos: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "75%",
        marginTop: -420
    },
    tasks: {
        fontSize: 16,
        fontWeight: "medium",
    },
    concluido: {
        fontSize: 10,
        fontWeight: "semibold",
        color: "#A09B9B",
    }

})