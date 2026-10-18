import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

type FotoGaleriaProps = {
  foto: ImageSourcePropType;
};

export default function FotoGaleria({ foto }: FotoGaleriaProps) {
  return <Image style={styles.imagen} source={foto}></Image>;
}

const styles = StyleSheet.create({
  imagen: {
    width: 250,
    height: 300,
    marginRight: 10,
    borderRadius: 10,
  },
});
