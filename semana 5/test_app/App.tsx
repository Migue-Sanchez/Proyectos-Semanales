import {
  ColorSchemeName,
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { TEMA_CLARO } from "./themes/TemaClaro";
import { TEMA_OSCURO } from "./themes/TemaOscuro";
import Cabecera from "./components/Cabecera";
import Titulo from "./components/Titulo";
import FotoGaleria from "./components/FotoGaleria";
import GaleriaFotos from "./components/GaleriaFotos";
import GaleriaRutas from "./components/GaleriaRutas";
import GaleriaAlojamiento from "./components/GaleriaAlojamiento";

export default function App() {
  const LISTA_ACTIVIDADES: Array<ImageSourcePropType> = [
    require("./assets/actividad1.jpg"),
    require("./assets/actividad2.jpg"),
    require("./assets/actividad3.jpg"),
    require("./assets/actividad4.jpg"),
    require("./assets/actividad5.jpg"),
  ];
  const LISTA_ALOJAMIENTOS: Array<ImageSourcePropType> = [
    require("./assets/alojamiento1.jpg"),
    require("./assets/alojamiento2.jpg"),
    require("./assets/alojamiento3.jpg"),
    require("./assets/alojamiento4.jpg"),
  ];
  const RUTAS = {
    Albaicín: require("./assets/mejores1.jpg"),
    Sabromonte: require("./assets/mejores2.jpg"),
    "El centro": require("./assets/mejores3.jpg"),
  };

  const tipo: ColorSchemeName = useColorScheme();

  const temaActivo = tipo === "light" ? TEMA_CLARO : TEMA_OSCURO;

  return (
    <ScrollView>
      <View
        style={[styles.contenerdor, { backgroundColor: temaActivo.colorFondo }]}
      >
        <Cabecera tema={tipo}></Cabecera>
        <View style={styles.contenedorSecundario}>
          <Titulo
            texto="Qué hacer en Granada"
            color={temaActivo.colorTitulo}
          ></Titulo>
          <GaleriaFotos fotos={LISTA_ACTIVIDADES}></GaleriaFotos>
          <Titulo
            texto="Las mejores rutas"
            color={temaActivo.colorTitulo}
          ></Titulo>
          <GaleriaRutas
            fotos={RUTAS}
            color={temaActivo.colorTextoFoto}
          ></GaleriaRutas>

          <Titulo
            texto="Loa mejores alojamientos"
            color={temaActivo.colorTitulo}
          ></Titulo>
          <GaleriaAlojamiento fotos={LISTA_ALOJAMIENTOS}></GaleriaAlojamiento>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenerdor: {
    flex: 1,
  },
  contenedorSecundario: {
    flex: 1,
    padding: 15,
  },
});
