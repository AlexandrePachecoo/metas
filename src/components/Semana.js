import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { format, startOfWeek, addDays } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Semana() {
    const primeiroDia = startOfWeek(new Date(), { weekStartsOn: 1 });
    const hoje = format(new Date(), 'dd'); // Obtém o dia atual como string

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
          {diasSemana.map((dia, index) => {
            const isHoje = dia.numero === hoje;
            
            return (
              <View 
                key={index} 
                style={[styles.diaContainer, isHoje ? styles.diaAtual : null]} // Aplica o fundo diferente no dia atual
              >
                <Text style={[styles.dias, isHoje ? styles.textoDiaAtual : null]}>
                  {dia.nome}
                </Text>
                <Text style={[styles.numero, isHoje ? styles.textoDiaAtual : null]}>
                  {dia.numero}
                </Text>
              </View>
            );
          })}
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
    diaContainer: {
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
    },
    dias: {
        fontSize: 10,
        marginBottom: 4,
    },
    numero: {
        fontSize: 20,
        fontWeight: "600",
    },
    diaAtual: {
        backgroundColor: "#676F9D",
        padding: 10,
    },
    textoDiaAtual: {
        color: "#fff", // Texto branco para melhor contraste
    }
});
