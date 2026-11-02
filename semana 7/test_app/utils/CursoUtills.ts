import { Curso, CURSOS } from "../model/model";
//programamacion con bucles
export function getCurso(id: string): Curso {
  for (let i = 0; i < CURSOS.length; i++) {
    if (id === CURSOS[i].id) {
      return CURSOS[i];
    }
  }
  throw new Error("curso no encontrado");
}
//programacion funcional
export function getCursoB(id: string): Curso {
  const buscarCurso = CURSOS.find((c) => c.id === id);

  if (!buscarCurso) {
    throw new Error("Curso no encontrado");
  }
  return buscarCurso;
}




