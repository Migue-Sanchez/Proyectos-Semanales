import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";

export default function App() {
  useFonts({
    Feast: require("./assets/Feast.ttf"),
  });

  return (
    <View style={styles.contenedorPrincipal}>
      <View style={styles.toolbar}>
        <View style={styles.menuDeportes}>
          <Text>
            <MaterialIcons
              name="menu"
              size={24}
              style={styles.iconColor}
            ></MaterialIcons>
          </Text>

          <Text style={styles.deportes}>DEPORTES</Text>
          <Text>
            <MaterialIcons name="person" size={24} style={styles.iconColor} />
          </Text>
        </View>
        <View>
          <ScrollView horizontal={true}>
            <Text style={styles.botonRedondeado}>Fútbol</Text>
            <Text style={styles.botonRedondeado}>Baloncesto</Text>
            <Text style={styles.botonRedondeado}>Tenis</Text>
            <Text style={styles.botonRedondeado}>Fórmula 1</Text>
            <Text style={styles.botonRedondeado}>NBA</Text>
            <Text style={styles.botonRedondeado}>Otros deportes</Text>
          </ScrollView>
        </View>
      </View>
      {/*noticia 1 */}
      <ScrollView>
        <View style={styles.nuevoContenedor}>
          <View>
            <Image
              style={styles.estiloIMagen}
              source={require("./assets/partido1.jpg")}
            ></Image>
            <View style={styles.estiloMarcador}>
              <View style={styles.colorGrisClaro}>
                <Image
                  style={styles.estiloImagen}
                  source={require("./assets/granada.png")}
                  resizeMode="center"
                ></Image>
                <Text style={styles.estiloTexto}>Granada CF</Text>
              </View>
              <View style={styles.colorGrisOscuro}>
                <View style={styles.estiloResultado}>
                  <Text
                    style={[
                      styles.estiloTexto1,
                      styles.estiloCentrado1,
                      styles.estiloBorde,
                    ]}
                  >
                    2
                  </Text>
                  <Text style={[styles.estiloTexto1, styles.estiloCentrado2]}>
                    0
                  </Text>
                </View>
                <View style={styles.estiloResultado2}>
                  <Text style={styles.estiloEstado}>FINALIZADO</Text>
                </View>
              </View>
              <View style={styles.colorGrisClaro}>
                <Image
                  style={styles.estiloImagen}
                  source={require("./assets/deportivo.png")}
                  resizeMode="center"
                ></Image>
                <Text style={styles.estiloTexto}>Deportivo</Text>
              </View>
            </View>
          </View>
          <Text style={styles.estiloSubtexto}>
            El Granada vuelve a puestos de ascenso
          </Text>
        </View>
        {/*segunda noticia*/}
        <View style={styles.nuevoContenedor}>
          <View>
            <Image
              style={styles.estiloIMagen}
              source={require("./assets/partido2.jpg")}
            ></Image>
            <View style={styles.estiloMarcador}>
              <View style={styles.colorGrisClaro}>
                <Image
                  style={styles.estiloImagen}
                  source={require("./assets/sevilla.png")}
                  resizeMode="center"
                ></Image>
                <Text style={styles.estiloTexto}>Sevilla CF</Text>
              </View>
              <View style={styles.colorRojo1}>
                <View style={styles.estiloResultado}>
                  <Text
                    style={[
                      styles.estiloTexto1,
                      styles.estiloCentrado1,
                      styles.estiloBorde,
                    ]}
                  >
                    0
                  </Text>
                  <Text style={[styles.estiloTexto1, styles.estiloCentrado2]}>
                    0
                  </Text>
                </View>
                <View style={[styles.estiloResultado2, styles.colorRojo2]}>
                  <Text style={styles.estiloEstado}>EN JUEGO</Text>
                </View>
              </View>
              <View style={styles.colorGrisClaro}>
                <Image
                  style={styles.estiloImagen}
                  source={require("./assets/betis.png")}
                  resizeMode="center"
                ></Image>
                <Text style={styles.estiloTexto}>Real Betis</Text>
              </View>
            </View>
          </View>
          <Text style={styles.estiloSubtexto}>
            Sin goles en el derby sevillano
          </Text>
        </View>
        {/*terecera noticia*/}
        <View style={styles.nuevoContenedor}>
          <View>
            <Image
              style={styles.estiloIMagen}
              source={require("./assets/partido3.jpg")}
            ></Image>
            <View style={styles.estiloMarcador}>
              <View style={styles.colorGrisClaro}>
                <Image
                  style={styles.estiloImagen}
                  source={require("./assets/valladolid.png")}
                  resizeMode="center"
                ></Image>
                <Text style={styles.estiloTexto}>Real Valladolid</Text>
              </View>
              <View style={styles.colorRojo1}>
                <View style={styles.estiloResultado}>
                  <Text
                    style={[
                      styles.estiloTexto1,
                      styles.estiloCentrado1,
                      styles.estiloBorde,
                    ]}
                  >
                    5
                  </Text>
                  <Text style={[styles.estiloTexto1, styles.estiloCentrado2]}>
                    4
                  </Text>
                </View>
                <View style={[styles.estiloResultado2, styles.colorRojo2]}>
                  <Text style={styles.estiloEstado}>EN JUEGO</Text>
                </View>
              </View>
              <View style={styles.colorGrisClaro}>
                <Image
                  style={styles.estiloImagen}
                  source={require("./assets/getafe.png")}
                  resizeMode="center"
                ></Image>
                <Text style={styles.estiloTexto}>Getafe</Text>
              </View>
            </View>
          </View>
          <Text style={styles.estiloSubtexto}>
            Partidazo con muchos goles en Pucela
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: "#e21818",
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 40,
    justifyContent: "space-between",
  },

  iconColor: {
    color: "#ffffff",
  },
  deportes: {
    fontFamily: "Feast",
    fontSize: 45,
    color: "#ffffff",
  },
  menuDeportes: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#e21818",
    marginBottom: 10,
    alignItems: "center",
  },
  botonRedondeado: {
    color: "#ffffff",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "white",
    borderWidth: 1,
    margin: 10,
  },
  nuevoContenedor: {
    flex: 1,
  },
  estiloIMagen: {
    width: "100%",
    height: 230,
  },
  estiloMarcador: {
    flexDirection: "row",
  },
  colorGrisClaro: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    flex: 1,
    alignItems: "center",
  },
  colorGrisOscuro: {
    backgroundColor: "#363434",
    flex: 1,
  },
  colorRojo1: {
    backgroundColor: "#e21818",
    flex: 1,
  },
  colorRojo2: {
    backgroundColor: "#ce0000",
    flex: 1,
  },
  estiloImagen: {
    width: 48,
    height: 48,
  },
  estiloTexto: {
    color: "#adadad",
    fontSize: 14,
    fontWeight: "bold",
  },
  estiloResultado: {
    padding: 10,
    flexDirection: "row",
  },
  estiloResultado2: {
    padding: 5,
  },
  estiloTexto1: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "bold",
  },
  estiloCentrado1: {
    flex: 1,
    textAlign: "center",
  },
  estiloCentrado2: {
    flex: 1,
    textAlign: "center",
  },
  estiloBorde: {
    borderColor: "#ffffff",
    borderRightWidth: 1,
  },
  estiloEstado: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
  estiloSubtexto: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 10,
  },
});
