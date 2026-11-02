import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { Curso } from "../model/model";
import { Picker } from "@react-native-picker/picker";
import { getCurso } from "../utils/CursoUtills";

type CursoPicketProps = {
  rotulo: string;
  curso: Curso;
  onChangeCurso: (Curso: Curso) => void;
};

export default function CursoPicket({
  rotulo,
  curso,
  onChangeCurso,
}: CursoPicketProps) {
  const [idCursoSeleccionado, setIdCursoSeleccionado] = useState(curso.id);
  useEffect(() => {
    const cursoCompleto = getCurso(idCursoSeleccionado);
    onChangeCurso(cursoCompleto);
  }, [idCursoSeleccionado]);

  return (
    <View>
      <Text variant={"titleSmall"} style={{ marginBottom: 6 }}>
        {rotulo}
      </Text>
      <View style={styles.contenedor}>
        <Picker
          style={styles.estiloPicker}
          selectedValue={idCursoSeleccionado}
          onValueChange={(item) => setIdCursoSeleccionado(item)}
        >
          <Picker.Item label="1ºDAM" value={"1DAM"}></Picker.Item>
          <Picker.Item label="2ºDAM" value={"2DAM"}></Picker.Item>
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    borderWidth: 1,
    borderColor: "#79747E",
    borderRadius: 4,
    backgroundColor: "#FFFBFBE",
  },
  estiloPicker: {
    marginLeft: 8,
    color: "#1C1B1F",
  },
});
