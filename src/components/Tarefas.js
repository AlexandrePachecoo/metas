import React, { use, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Checkbox } from "react-native-paper";

export default function Tarefas() {

    const [checked, setChecked] = useState({});
    const tarefas = [{
        id: 1,
        nome: "estudar",
        hora: "04:00",
        vezes: "todos os dias",
    },
    {
        id: 2,
        nome: "trabalhar",
        hora: "08:00",
        vezes: "todos os dias",

    },

    ];

    const handleCheck = (id) => {
        setChecked(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }));

    };

    return (
        <View style={styles.container}>
            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tasks}>
                        <View style={styles.texts}>
                            <Text style={styles.nome}>{item.nome}</Text>
                            <Text style={styles.hora}>{item.hora} • {item.vezes}</Text>
                        </View>

                        <Checkbox
                            status={checked[item.id] ? "checked" : "unchecked"}
                            onPress={() => handleCheck(item.id)}
                        />


                    </View>
                )}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,


    },
    tasks: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#676F9D",
        width: 336,
        height: 68,
        marginTop: 10,
        borderRadius: 15,
        paddingRight: 20,
    },
    nome: {
        color: "#fff",
        fontSize: 16,
        marginLeft: 50,
        marginTop: 15,
        fontWeight: "semibold",
    },
    hora: {
        color: "#fff",
        fontSize: 10,
        marginLeft: 50,
        marginTop: 3,
    },
    texts: {
        marginBottom: 20,
    },
})