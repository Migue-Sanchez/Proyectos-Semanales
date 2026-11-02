import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NivelImc } from "../model/NivelImc";
import { getNivel, NIVELES_IMC } from "../service/NivelesImcService";

type VisorNivelProps = {
  nivel: NivelImc;
  seleccionado: boolean;
};

export default function VisorNivel({ nivel, seleccionado }: VisorNivelProps) {
  return (
    <View
      style={[
        styles.contenedor,
        { backgroundColor: nivel.color },
        seleccionado ? styles.contenedorDestacado : styles.contenedor,
      ]}
    >
      <Text
        style={styles.texto}
      >{`${nivel.categoria} (${nivel.extremoInferior}-${nivel.extremoSuperior})`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: "100%",
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginVertical: 5,
    opacity: 0.4,
    borderRadius: 20,
  },
  contenedorDestacado: {
    borderWidth: 2,
    borderColor: "#000040",
    opacity: 1,
  },
  texto: {
    fontSize: 14,
    color: "#1A1A1A",
  },
});
