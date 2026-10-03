import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import {
  Appbar,
  Avatar,
  Badge,
  Button,
  Card,
  Chip,
  Divider,
  FAB,
  List,
  MD3LightTheme,
  PaperProvider,
  ProgressBar,
  Searchbar,
  SegmentedButtons,
  Surface,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AppbarContent from "react-native-paper/lib/typescript/components/Appbar/AppbarContent";
import { temaClaro } from "./themes/temaClaro";
import { temaOscuro } from "./themes/temaOscuro";

export function getRootComponent() {
  return (
    <PaperProvider theme={temaClaro}>
      <App />
    </PaperProvider>
  );
}

export default function App() {
  const tema = useTheme();

  return (
    <SafeAreaView style={{ backgroundColor: tema.colors.backdrop }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Appbar.Header
          elevated={true}
          style={{ backgroundColor: tema.colors.primary }}
        >
          <Appbar.Action
            icon={"menu"}
            iconColor={tema.colors.onPrimary}
          ></Appbar.Action>
          <Appbar.Content
            title="Excursiones Roberto"
            titleStyle={{ color: tema.colors.onPrimary }}
          ></Appbar.Content>
          <Appbar.Action
            icon={"bell-outline"}
            iconColor={tema.colors.onPrimary}
          ></Appbar.Action>
          <Avatar.Icon
            icon={"account"}
            size={36}
            style={{ marginRight: 12, backgroundColor: tema.colors.secondary }}
          ></Avatar.Icon>
        </Appbar.Header>
        <View style={{ padding: 16, paddingBottom: 100, gap: 16 }}>
          <Searchbar
            style={{
              marginTop: 8,
              backgroundColor: tema.colors.background,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: tema.colors.outline,
            }}
            placeholder="Buscar Ofertas"
            iconColor={tema.colors.onSurface}
            inputStyle={{ color: tema.colors.onSurface }}
          ></Searchbar>
          <SegmentedButtons
            style={{ marginTop: 8 }}
            buttons={[
              { value: "home", label: "Inicio", icon: "home-outline" },
              { value: "ofertas", label: "Ofertas", icon: "chart-line" },
              { value: "settings", label: "Ajustes", icon: "cog-outline" },
            ]}
            value="ofertas"
          ></SegmentedButtons>
          <Card
            style={{ marginTop: 8, backgroundColor: tema.colors.surface }}
            mode="elevated"
            elevation={2}
          >
            <Card.Cover source={require("./assets/alhambra.jpg")}></Card.Cover>
            <Card.Title
              title={"Visita la Alhambra"}
              subtitle={"Granada,España"}
              right={() => (
                <Badge style={{ marginRight: 16 }}>Alta demanda</Badge>
              )}
              left={() => (
                <Avatar.Icon
                  icon={"castle"}
                  size={42}
                  style={{ backgroundColor: tema.colors.primaryContainer }}
                ></Avatar.Icon>
              )}
            ></Card.Title>
            <Card.Content>
              <Text variant="bodyMedium">
                La Alhambra es un conjunto monumental de origen nazarí situado
                en Granada,recoocido por su impresionante arquitectura,jardines
                y palacios.{" "}
              </Text>
              <View style={styles.fila}>
                <Chip icon={"check-circle"}>Activo</Chip>
                <Chip icon={"calendar"}>Fechas libres</Chip>
                <Chip icon={"star-outline"}>Favoritos</Chip>
              </View>
              <Text variant="labelMedium" style={{ marginTop: 20 }}>
                Plazas libres
              </Text>
              <ProgressBar
                progress={0.72}
                color={tema.colors.primary}
                style={{ marginTop: 8 }}
              ></ProgressBar>
              <Card.Actions>
                <Button>Cancelar</Button>
                <Button>Abrir</Button>
              </Card.Actions>
            </Card.Content>
          </Card>
          <Surface
            style={{
              marginTop: 8,
              backgroundColor: tema.colors.surface,
              borderRadius: tema.roundness,
            }}
          >
            <List.Item
              title={"Notificaciones"}
              description={"Recibir avisos de nuevas ofertas"}
              left={() => <List.Icon icon={"bell-outline"}></List.Icon>}
            ></List.Item>
            <Divider></Divider>
            <List.Item
              title={"Tema"}
              description={"Cambiar el tema de colores de la app"}
              left={() => <List.Icon icon={"palette-outline"}></List.Icon>}
            ></List.Item>
          </Surface>
          <TextInput
            mode={"outlined"}
            label={"Presupuesto disponible"}
            style={{ marginTop: 8 }}
            left={<TextInput.Icon icon={"cash"}></TextInput.Icon>}
            right={<TextInput.Icon icon="currency-eur"></TextInput.Icon>}
          ></TextInput>
          <Button mode="contained-tonal" icon={"tag-outline"}>
            Mostrar ofertas
          </Button>
        </View>
      </ScrollView>
      <FAB
        icon={"plus"}
        label="Nuevo"
        color={tema.colors.primary}
        style={styles.fab}
      ></FAB>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: "row",
    gap: 8,
    marginTop: 16,
  },
  fab: {
    position: "absolute",
    right: 50,
    bottom: 50,
  },
});
