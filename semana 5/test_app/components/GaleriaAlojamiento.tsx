import {
  FlatList,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import FotosAlojamiento from "./FotosAlojamiento";

type GaleriaAlojamientoProps = {
  fotos: Array<ImageSourcePropType>;
};

export default function GaleriaAlojamiento({ fotos }: GaleriaAlojamientoProps) {
  return (
    <FlatList
      data={fotos}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <FotosAlojamiento foto={item}></FotosAlojamiento>
      )}
      numColumns={2}
      scrollEnabled={false}
    ></FlatList>
  );
}

const styles = StyleSheet.create({});
