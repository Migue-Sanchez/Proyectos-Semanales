import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default function App() {
  function pulsar() {
    console.log("Boton pulsado");
  }

  function alerta() {
    Alert.alert("Fab pulsado", "alerta", [
      { text: "Cancelar", onPress: () => console.log("Cancelar") },
      { text: "Aceptar", onPress: () => console.log("aceptar") },
    ]);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image
            source={require("./assets/register_now.png")}
            style={styles.imageStyle}
            resizeMode="stretch"
          />
          <View style={styles.contenedorSecundario}></View>
          <View style={styles.contenedorFormulario}>
            <TextInput
              style={styles.cuadroTexto}
              placeholder="Introduce tu nombre"
              maxLength={100}
            ></TextInput>

            <TextInput
              style={styles.cuadroTexto}
              placeholder="Introduce tu apellido"
              maxLength={100}
            ></TextInput>

            <TextInput
              style={styles.cuadroTexto}
              placeholder="Teléfono"
              maxLength={9}
              keyboardType="phone-pad"
            ></TextInput>

            <TextInput
              style={styles.cuadroTexto}
              placeholder="Correo electrónico"
              maxLength={100}
            ></TextInput>

            <TextInput
              style={styles.cuadroTexto}
              placeholder="Contraseña"
              maxLength={12}
              secureTextEntry={true}
            ></TextInput>

            <TextInput
              style={[styles.cuadroTexto, styles.cuadroObervaciones]}
              placeholder="Observaciones"
              maxLength={100}
            ></TextInput>

            <View style={styles.contenedorPicker}>
              <Picker style={styles.colorGris}>
                <Picker.Item label="--Nivel de estudios--" value="nv" />
                <Picker.Item label="Secundaria" value="eso" />
                <Picker.Item label="Bachillerato" value="bh" />
                <Picker.Item label="Ciclo de FP" value="fp" />
                <Picker.Item label="Universidad" value="uni" />
                <Picker.Item label="Sin estudios" value="nada" />
              </Picker>
            </View>
            <Text style={styles.colorGris}>
              Pulsando el siguiente botón,el usuario se hace responsable de
              hacer un uso correcto de l portal, sin subir contenidos que
              supongan un incumplimiento de las leyes de protección de datos ni
              de la propiedad intelectual
            </Text>
            <BouncyCheckbox
              size={16}
              fillColor="red"
              unFillColor="white"
              text="Hé leído y acepto los términos"
              textStyle={{ textDecorationLine: "none" }}
            />
            <Pressable
              style={({ pressed }) =>
                pressed ? styles.estiloBotonPulsado : styles.estiloBoton
              }
              onPress={pulsar}
            >
              <Text style={styles.textoBoton}>Registrar</Text>
            </Pressable>
            <Text style={styles.colorGris}>
              Al pulsar el botón sus datos personales serán proporcionados a
              nuestro proveedor de publicidad, que insertará anuncios de su
              interés durante el uso de la aplicación. Para dejar de ver
              anuncios, deberá adquirir la versión de pago de la app en la{" "}
              {Platform.OS === "android" ? "Play store" : "Apple Store"}
            </Text>
          </View>
        </View>
      </ScrollView>
      <Pressable
        onPress={alerta}
        style={({ pressed }) => [
          styles.fab,
          { backgroundColor: pressed ? "#cc7000" : "orange" },
        ]}
      >
        <MaterialIcons name="share" style={styles.textoFab}></MaterialIcons>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: "100%",
  },
  contenedorSecundario: {
    backgroundColor: "#f5f3f3ff",
    width: "100%",
    padding: 12,
  },
  contenedorFormulario: {
    backgroundColor: "white",
    padding: 20,
    gap: 12,
  },
  cuadroTexto: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#e7e5e5ff",
    borderWidth: 1,
    borderRadius: 8,
  },
  cuadroObervaciones: {
    height: 100,
  },
  contenedorPicker: {
    borderColor: "#e7e5e5ff",
    borderWidth: 1,
    borderRadius: 8,
  },

  colorGris: {
    color: "#8c8c8c",
  },
  estiloBoton: {
    marginTop: 24,
    paddingVertical: 16,
    width: 150,
    backgroundColor: "#e45151ff",
    borderRadius: 25,
  },
  textoBoton: {
    color: "White",
    textAlign: "center",
    fontWeight: "bold",
  },
  estiloBotonPulsado: {
    marginTop: 24,
    paddingVertical: 16,
    width: 150,
    backgroundColor: "#c13b3b",
    borderRadius: 25,
  },
  fab: {
    position: "absolute",
    bottom: 40,
    right: 30,
    borderRadius: "50%",
    width: 56,
    height: 56,
  },
  textoFab: {
    color: "white",
    fontSize: 24,
    margin: "auto",
  },
});
