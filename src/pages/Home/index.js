import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Semana from "../../components/Semana";

export default function Home() {
    return (
        <View style={styles.container}>
                <Semana/>
                <View style={styles.titulos}>
                    <Text style={styles.tasks}>Tarefas:</Text>
                    <Text>0/4 concluido</Text>
                </View>
            
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    titulos: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    tasks: {
    }
    
})