import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, TextInput } from "react-native-paper";


type CuadroTextoRotuladoProps = {
  rotulo: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export default function CuadroTextoRotulado({
  rotulo,
  placeholder,
  value,
  onChangeText,
}: CuadroTextoRotuladoProps) {
  return (
    <View style={{ width: "100%" }}>
      <Text variant={"titleSmall"} style={{ marginBottom: 6 }}>
        {rotulo}
      </Text>
      <TextInput
        mode="outlined"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      ></TextInput>
    </View>
  );
}



const styles = StyleSheet.create({});
