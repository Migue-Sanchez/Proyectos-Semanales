import {
  Image,
  ImageComponent,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

type FotosAlojamientoProps = {
  foto: ImageSourcePropType;
};

export default function FotosAlojamiento({ foto }: FotosAlojamientoProps) {
  return <Image style={styles.estilo} source={foto}></Image>;
}

const styles = StyleSheet.create({
  estilo: {
    margin: 5,
    width: "50%",
    aspectRatio: 1,
  },
});
