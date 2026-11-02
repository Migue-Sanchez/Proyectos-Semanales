import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Icono = React.ComponentProps<typeof MaterialCommunityIcons>["name"];

type CuadroTextoProps = {
  icono: Icono;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export default function CuadroTexto({
  icono,
  placeholder,
  value,
  onChangeText,
}: CuadroTextoProps) {
  return (
    <View style={styles.contenedorCuadroTexto}>
      <MaterialCommunityIcons
        name={icono}
        size={24}
        color={"#1F2937"}
      ></MaterialCommunityIcons>
      <TextInput
        style={styles.interiorCuadroTexto}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorCuadroTexto: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  interiorCuadroTexto: {
    color: "#1F2937",
    marginLeft: 16,
  },
});
