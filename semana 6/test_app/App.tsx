import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CuadroTexto from "./components/CuadroTexto";
import Boton from "./components/Boton";
import { getNivel } from "./service/NivelesImcService";
import Resultado from "./components/Resultado";
import { overlay } from "react-native-paper";

export default function App() {
  const [peso, setpeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setIMC] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);

  function calcularImc() {
    const expresionRegular = /^\d+([.]\d+)?$/;

    const pesoNumero = Number(peso);
    const alturaNumero = Number(altura);

    if (expresionRegular.test(peso) && expresionRegular.test(altura)) {
      const imcNumero: number = pesoNumero / alturaNumero ** 2;

      setIMC(Number(imcNumero.toFixed(2)));
      console.log(imcNumero.toFixed(2));
      console.log(getNivel(imcNumero));
    } else {
      if (!expresionRegular.test(peso)) {
        Alert.alert(`El valor ${peso} es incorrecto`);
      }
      if (!expresionRegular.test(altura)) {
        Alert.alert(`El valor ${altura} es incorrecto`);
      }
      if (!expresionRegular.test(peso) && !expresionRegular.test(altura)) {
        Alert.alert(`Ambos datos son incorrectos`);
      }
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {imc !== -1 && <Pressable style={styles.overlay}></Pressable>}
      <View style={styles.contenedorPrincipal}>
        <Text style={styles.titulo}>Calculadora IMC</Text>
        <CuadroTexto
          icono="scale-bathroom"
          placeholder="Introduce tu peso en Kg"
          value={peso}
          onChangeText={setpeso}
        ></CuadroTexto>
        <CuadroTexto
          icono={"human-male-height"}
          placeholder="Introduce tu altura en metros"
          value={altura}
          onChangeText={setAltura}
        ></CuadroTexto>
        <Boton texto="Calcular IMC" onPress={calcularImc}></Boton>

        {
          <Modal transparent={true} animationType="slide" visible={imc !== -1}>
            <Pressable
              style={{ flex: 1 }}
              onPress={() => setIMC(-1)}
            ></Pressable>
            <View style={styles.pestana}>
              <Resultado imc={imc}></Resultado>
            </View>
          </Modal>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#F0F4F8",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F2937",
    marginTop: 32,
    marginBottom: 16,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 80,
  },
  pestana: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: "70%",
    padding: 10,
  },
});
