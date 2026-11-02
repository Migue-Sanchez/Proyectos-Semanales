import { StyleSheet, View } from "react-native";
import React from "react";
import { Calificacion } from "../model/model";
import { IconButton, Surface, Text } from "react-native-paper";

type VisorCalificacionProps = {
  calificacion: Calificacion;
  onPressSubirNota: () => void;
  onPressBajarNota: () => void;
  onPressBorrarAsignatura: () => void;
};

export default function VisorCalificacion({
  calificacion,
  onPressBajarNota,
  onPressBorrarAsignatura,
  onPressSubirNota,
}: VisorCalificacionProps) {
  return (
    <Surface style={styles.contenedor}>
      <View style={styles.seccionIzquierda}>
        <IconButton
          icon={"delete"}
          size={24}
          iconColor="gray"
          onPress={onPressBorrarAsignatura}
        ></IconButton>
        <Text variant="titleMedium">{calificacion.asignatura}</Text>
      </View>

      <View style={styles.seccionDerecha}>
        <IconButton
          onPress={onPressBajarNota}
          icon={"minus"}
          size={24}
          containerColor="#D32F2F"
          iconColor="white"
        ></IconButton>
        <Text variant="headlineMedium">{calificacion.nota}</Text>
        <IconButton
          onPress={onPressSubirNota}
          icon={"plus"}
          size={24}
          containerColor="#2E7D32"
          iconColor="white"
        ></IconButton>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E9EEF3",
    marginVertical: 6,
    borderRadius: 8,
  },

  seccionIzquierda: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconoBorrar: {
    margin: 4,
  },
  seccionDerecha: {
    flexDirection: "row",
    alignItems: "center",
  },
  textoNota: {
    fontSize: 25, // Tamaño exacto 25[cite: 1]
    fontWeight: "bold", // Negrita[cite: 1]
    marginHorizontal: 4,
  },
});
