import {
  ColorValue,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import FotoGaleria from "./FotoGaleria";

type ImagenRotuladaProps = {
  foto: ImageSourcePropType;
  texto: string;
  color?: ColorValue;
};

export default function ImagenRotulada({
  foto,
  texto,
  color,
}: ImagenRotuladaProps) {
  useFonts({
    BebasNeue: require("../assets/BebasNeue-Regular.ttf"),
  });
  return (
    <ImageBackground style={styles.estiloBg} source={foto}>
      <Text style={[styles.titulo, { color: color }]}>{texto}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontFamily: "BebasNeue",
    fontSize: 48,
    textShadowColor: "#000",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 4.65,
    elevation: 6,
  },

  estiloBg: {
    width: "100%",
    height: 200,
    marginVertical: 5,
    alignItems: "center",
  },
});
