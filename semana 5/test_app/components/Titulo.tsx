import { ColorValue, StyleSheet, Text, View } from "react-native";
import React from "react";

type TituloProps = {
  texto: string;
  color: ColorValue;
};

export default function Titulo({ texto, color }: TituloProps) {
  return <Text style={[styles.texto, { color: color }]}>{texto}</Text>;
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
});
