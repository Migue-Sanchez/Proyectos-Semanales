import { NivelImc, NivelesImc } from "../model/NivelImc";

import datosImc from "../data/imc.json";

export const NIVELES_IMC = datosImc as NivelesImc;

export const getNivel = (imc: number): NivelImc => {
  const nivelEncontrado = NIVELES_IMC.find(
    (nivel) => imc >= nivel.extremoInferior && imc < nivel.extremoSuperior,
  );

  if (!nivelEncontrado) {
    throw new Error("Nivel de IMC no encontrado");
  }
  return nivelEncontrado;
};
