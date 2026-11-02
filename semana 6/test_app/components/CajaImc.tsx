import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import datosImc from "../data/imc.json";
import { NIVELES_IMC } from "../service/NivelesImcService";
import VisorNivel from "./VisorNivel";

type CajaImcProp = {
  idDestacado: number;
};

export default function CajaImc({ idDestacado }: CajaImcProp) {
  return (
    <View>
      <FlatList
        data={NIVELES_IMC}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <VisorNivel
            nivel={item}
            seleccionado={item.id === idDestacado}
          ></VisorNivel>
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({});
