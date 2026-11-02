import datos from "../data/asignaturas.json";

export type Asignatura = string;
export type Asignaturas = Array<Asignatura>;
export type Curso = {
  id: string;
  nombre: string;
  asignaturas: Asignaturas;
};
export type Cursos = Array<Curso>;
export type Calificacion = {
  asignatura: Asignatura;
  nota: number;
};
export type Calificaciones = Array<Calificacion>;
export type Boletin = {
  nombre: string;
  apellidos: string;
  nombreCurso: string;
  calificaciones: Calificaciones;
};

export const CURSOS: Cursos = datos;

console.log(CURSOS);
