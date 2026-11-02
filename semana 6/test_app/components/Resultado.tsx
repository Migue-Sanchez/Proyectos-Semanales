import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { getNivel, NIVELES_IMC } from "../service/NivelesImcService";
import CajaImc from "./CajaImc";
type ResultadoProp = {
  imc: number;
};
export default function Resultado({ imc }: ResultadoProp) {
  const nivel = getNivel(imc);

  return (
    <View style={styles.contenedor}>
      <Text
        style={styles.textoTitulo}
      >{`${nivel.categoria} (${imc.toFixed(1)})`}</Text>
      <Text style={styles.textoConsejo}>{`${nivel.consejo}`}</Text>
      <CajaImc idDestacado={nivel.id}></CajaImc>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
  textoTitulo: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 12,
    textAlign: "center",
  },
  textoConsejo: {
    fontSize: 16,
    color: "#34495E",
    textAlign: "justify",
    marginBottom: 16,
  },
});
