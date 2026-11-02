import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FAB, PaperProvider, Portal, Text, Title } from "react-native-paper";
import CuadroTextoRotulado from "./components/CuadroTextoRotulado";
import { Calificaciones, Curso, CURSOS } from "./model/model";
import CursoPicket from "./components/CursoPicket";
import {
  añadirAsignatura,
  bajarNota,
  borrarAsignatura,
  calcularMedia,
  InicializarCalificaciones,
  subirNota,
} from "./utils/CalificacionUtil";
import VisorCalificacion from "./components/VisorCalificacion";
import FormularioNuevaAsignatura from "./components/FormularioNuevaAsignatura";

export default function App() {
  //-----nueva funcion-----//

  function accionNuevaAsignatura() {
    setAlertaVisible(true);
  }

  //----variables de estado-----//

  const [alertaVisible, setAlertaVisible] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [curso, setCurso] = useState<Curso>(CURSOS[0]);
  const [fgAbierto, setFgAbierto] = useState(false);
  const [calificaciones, setCalificaciones] = useState<Calificaciones>(
    InicializarCalificaciones(CURSOS[0]),
  );

  //-----notaMedia-----//
  const notaMedia = useMemo(
    () => calcularMedia(calificaciones),
    [calificaciones],
  );

  useEffect(() => {
    setCalificaciones(InicializarCalificaciones(curso));
  }, [curso]);

  return (
    <SafeAreaView style={styles.contenedorPrincipal}>
      <PaperProvider>
        <Portal>
          <Text style={styles.texto} variant={"titleLarge"}>
            Mis notas
          </Text>
          <CuadroTextoRotulado
            rotulo="Nombre"
            placeholder="Pon tu nombre aqui"
            value={nombre}
            onChangeText={setNombre}
          ></CuadroTextoRotulado>
          <CuadroTextoRotulado
            rotulo="Apellido"
            placeholder="Pon tu apellido aqui"
            value={apellido}
            onChangeText={setApellido}
          ></CuadroTextoRotulado>
          <CursoPicket
            rotulo="Curso"
            curso={curso}
            onChangeCurso={setCurso}
          ></CursoPicket>
          <FlatList
            data={calificaciones}
            keyExtractor={(item) => item.asignatura}
            renderItem={({ item }) => (
              <VisorCalificacion
                calificacion={item}
                onPressBajarNota={() =>
                  setCalificaciones((prev) => bajarNota(prev, item.asignatura))
                }
                onPressSubirNota={() =>
                  setCalificaciones((prev) => subirNota(prev, item.asignatura))
                }
                onPressBorrarAsignatura={() =>
                  setCalificaciones((prev) =>
                    borrarAsignatura(prev, item.asignatura),
                  )
                }
              ></VisorCalificacion>
            )}
          ></FlatList>

          <Text variant="titleLarge" style={{ textAlign: "center" }}>
            Nota Media: {notaMedia}
          </Text>

          <FAB.Group
            open={fgAbierto}
            visible={true}
            backdropColor="rgba(0,0,0,0.8)"
            icon={fgAbierto ? "minus" : "plus"}
            onStateChange={({ open }) => setFgAbierto(open)}
            onPress={() => setFgAbierto(false)}
            actions={[
              {
                icon: "plus",
                label: "Nueva asignatura",
                labelTextColor: "white",
                onPress: () => accionNuevaAsignatura(),
              },
              {
                icon: "delete",
                label: "Borrar notas",
                labelTextColor: "white",

                onPress: () =>
                  setCalificaciones(InicializarCalificaciones(curso)),
              },
            ]}
          />
          <FormularioNuevaAsignatura
            visible={alertaVisible}
            onPressCancelar={() => setAlertaVisible(false)}
            onPressAceptar={(nombreAsignatura) => {
              setCalificaciones((prev) =>
                añadirAsignatura(prev, nombreAsignatura),
              );
              setAlertaVisible(false);
            }}
          ></FormularioNuevaAsignatura>
        </Portal>
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    padding: 20,
    gap: 16,
  },
  texto: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
