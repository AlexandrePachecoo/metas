import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {format, startOfWeek,addDays } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Semana() {
    const primeiroDia = startOfWeek(new Date(), { weekStartsOn: 1 });

    const diasSemana = Array.from({ length: 7 }).map((_, index) => {
        const data = addDays(primeiroDia, index);
        return {
          nome: format(data, "EEEEEE", { locale: ptBR }), // Ex: "Seg"
          numero: format(data, "dd"), // Ex: "27"
        };
      });

    return (

      <View style={styles.container}>
      <View style={styles.semana}>

        {diasSemana.map((dia, index) => (
          <Text key={index} style={styles.dias}>{dia.nome}</Text>
        ))}
      </View>

      <View style={styles.data}>
        {diasSemana.map((dia, index) => (
          <Text key={index} style={styles.numero}>{dia.numero}</Text>
        ))}
      </View>
    </View>

    );
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
         marginTop: 27
        },
    semana: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    dias: {
        fontSize: 10,
        marginBottom: 0,
        marginLeft: 4,
        },
    data: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    numero: {
        fontSize: 20,
        margin: 10,
        marginTop: 0,
        fontWeight: "semibold"
    }
})