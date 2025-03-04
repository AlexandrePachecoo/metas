import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Checkbox } from "react-native-paper";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConnection";
import { getAuth } from "firebase/auth";
import { startOfDay, addDays } from "date-fns";
import { Timestamp } from "firebase/firestore";

export default function Tarefas() {
    const [checked, setChecked] = useState({});
    const [tarefas, setTarefas] = useState([]);

    const handleCheck = (id) => {
        setChecked(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    useEffect(() => {
        async function getDados() {
            try {
                const user = getAuth().currentUser;
                if (!user) return;

                // Pega a data de hoje e transforma em Timestamp do Firebase
                const hoje = startOfDay(new Date()); 
                const amanha = addDays(hoje, 1);

                const hojeTimestamp = Timestamp.fromDate(hoje);
                const amanhaTimestamp = Timestamp.fromDate(amanha);

                // Query para pegar tarefas do dia específico
                const userRef = query(
                    collection(db, `users/${user.uid}/metas`), 
                    where("data", ">=", hojeTimestamp),
                    where("data", "<", amanhaTimestamp)
                );

                const snapshot = await getDocs(userRef);
                let tarefasLista = [];
                
                snapshot.forEach((doc) => {
                    tarefasLista.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        hora: doc.data().hora,
                        vezes: doc.data().repetição,
                        data: doc.data().data,
                    });
                });

                setTarefas(tarefasLista);
            } catch (error) {
                console.error("Erro ao buscar tarefas:", error);
            }
        }
        getDados();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tasks}>
                        <View style={styles.texts}>
                            <Text style={styles.nome}>{item.nome}</Text>
                            <Text style={styles.hora}>{item.hora} • a cada {item.vezes} dias</Text>
                        </View>

                        <Checkbox
                            status={checked[item.id] ? "checked" : "unchecked"}
                            onPress={() => handleCheck(item.id)}
                            style={styles.checkbox}
                            color="#fff"
                            uncheckedColor="#fff"
                        />
                    </View>
                )}
            />
        </View>
    );
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
        fontWeight: "600",
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
    checkbox: {
        backgroundColor: "#fff",
    },
    checked: {
        backgroundColor: "#fff",
    }
});
