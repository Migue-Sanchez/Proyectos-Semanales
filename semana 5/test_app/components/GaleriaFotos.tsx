import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import FotoGaleria from "./FotoGaleria";

type GaleriaFotosProps = {
  fotos: Array<ImageSourcePropType>;
};

export default function GaleriaFotos({ fotos }: GaleriaFotosProps) {
  return (
    <View style={styles.contenedor}>
      <FlatList
        data={fotos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <FotoGaleria foto={item}></FotoGaleria>}
        horizontal={true}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    height: 300,
  },
});
