import { ColorValue } from "react-native";

export type NivelImc = {
  id: number;
  categoria: string;
  extremoInferior: number;
  extremoSuperior: number;
  consejo: string;
  color: ColorValue;
};

export type NivelesImc = NivelImc[];
