import { ColorSchemeName, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const IMAGENES = {
  light: require("../assets/granada_light.jpg"),
  dark: require("../assets/granada_dark.jpg"),
};

type CabeceraProps = {
  tema: ColorSchemeName;
};

export default function Cabecera({ tema }: CabeceraProps) {
  const imagen = tema === "light" ? IMAGENES.light : IMAGENES.dark;
  return (
    <Image
      source={imagen}
      style={styles.tamanoImagen}
      resizeMode="cover"
    ></Image>
  );
}

const styles = StyleSheet.create({
  tamanoImagen: {
    width: "100%",
    height: 250,
  },
});
