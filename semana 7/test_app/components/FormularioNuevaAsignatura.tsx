import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button, Dialog, Portal, Text, TextInput } from "react-native-paper";

type FormularioNuevaAsignaturaProps = {
  visible: boolean;
  onPressAceptar: (nombre: string) => void;
  onPressCancelar: () => void;
};

export default function FormularioNuevaAsignatura({
  visible,
  onPressAceptar,
  onPressCancelar,
}: FormularioNuevaAsignaturaProps) {
  const [nombreAsignatura, setNombreAsignatura] = useState("");
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onPressCancelar}>
        <Dialog.Icon icon={"book-open-variant"}></Dialog.Icon>
        <Dialog.Title>Nueva asignatura</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">Introduce asignatura</Text>
          <TextInput
            value={nombreAsignatura}
            onChangeText={setNombreAsignatura}
            placeholder={"Nombre de asignatura"}
            left={
              <TextInput.Icon icon={"book-education-outline"}></TextInput.Icon>
            }
          ></TextInput>
          <Dialog.Actions>
            <Button mode="text" onPress={onPressCancelar}>
              Cancelar
            </Button>
            <Button
              mode="contained"
              icon="check"
              onPress={() => {
                onPressAceptar(nombreAsignatura);
                setNombreAsignatura("");
              }}
            >
              Aceptar
            </Button>
          </Dialog.Actions>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({});
