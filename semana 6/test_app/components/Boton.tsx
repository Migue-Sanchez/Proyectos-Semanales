import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type BotonProps = {
  texto: string;
  onPress: () => void;
};

export default function Boton({ texto, onPress }: BotonProps) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [styles.boton, pressed && styles.botonPulsado]}
        onPress={onPress}
      >
        <Text style={styles.textoBoton}>{texto}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  boton: {
    width: "100%",
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 10,
  },
  botonPulsado: {
    backgroundColor: "#005BBB",
  },
  textoBoton: {
    color: "#FFFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
