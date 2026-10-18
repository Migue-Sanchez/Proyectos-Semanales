import {
  ColorValue,
  FlatList,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import ImagenRotulada from "./ImagenRotulada";

type GaleriaRutasProps = {
  fotos: Record<string, ImageSourcePropType>;
  color: ColorValue;
};

export default function GaleriaRutas({ fotos, color }: GaleriaRutasProps) {
  const listaLugares = Object.keys(fotos);

  return (
    <View>
      <FlatList
        data={listaLugares}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ImagenRotulada
            texto={item}
            foto={fotos[item]}
            color={color}
          ></ImagenRotulada>
        )}
        scrollEnabled={false}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({});
