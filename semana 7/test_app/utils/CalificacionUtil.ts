import {
  Asignatura,
  Calificacion,
  Calificaciones,
  Curso,
} from "../model/model";
//--------------------------------------------------------------------------------//
export function InicializarCalificaciones(curso: Curso): Calificaciones {
  return curso.asignaturas.map((asignatura) => ({
    asignatura: asignatura,
    nota: 0,
  }));
}
//-------------------------------------------------------------------------------------//
export function subirNota(
  calificaciones: Calificaciones,
  asignatura: Asignatura,
): Calificaciones {
  let encontrada = false;

  const nuevasCalificaciones = calificaciones.map((c) => {
    if (c.asignatura === asignatura) {
      encontrada = true;
      return {
        ...c,
        nota: Math.min(c.nota + 1, 10),
      };
    }
    return c;
  });

  if (!encontrada) {
    return calificaciones;
  }

  return nuevasCalificaciones;
}
//------------------------------------------------------------------------------//
export function bajarNota(
  calificaciones: Calificaciones,
  asignatura: Asignatura,
): Calificaciones {
  let encontrada = false;
  const nuevasCalificaciones = calificaciones.map((c) => {
    if (c.asignatura === asignatura) {
      encontrada = true;
      return {
        ...c,
        nota: Math.max(0, c.nota - 1),
      };
    }
    return c;
  });
  if (!encontrada) {
    return calificaciones;
  }
  return nuevasCalificaciones;
}
//----------------------------------------------------------------------------//

export function añadirAsignatura(
  calificaciones: Calificaciones,
  nombre: Asignatura,
): Calificaciones {
  let existe = false;
  const nuevaCalificacion = calificaciones.map((c) => {
    if (c.asignatura === nombre) {
      existe = true;
    }
    return c;
  });
  if (existe) {
    return calificaciones;
  }

  const nuevaLista: Calificaciones = [
    ...calificaciones,
    {
      asignatura: nombre,
      nota: 0,
    },
  ];

  return nuevaLista;
}
//--------------------------------------------------------------------------//

export function borrarAsignatura(
  calificaciones: Calificaciones,
  nombre: Asignatura,
): Calificaciones {
  const nuevaCalificacion = calificaciones.filter(
    (c) => c.asignatura !== nombre,
  );

  if (nuevaCalificacion.length === calificaciones.length) {
    return calificaciones;
  }

  return nuevaCalificacion;
}

//-----------------------------------------------------------------------------//
export function calcularMedia(calificaciones: Calificaciones): number {
  if (calificaciones.length === 0) {
    return 0;
  }
  const sumarNotas = calificaciones.reduce(
    (acumulador, c) => acumulador + c.nota,
    0,
  );

  const media = sumarNotas / calificaciones.length;
  return parseFloat(media.toFixed(2));
}
