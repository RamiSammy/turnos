import React from "react";

function Resume({ selectCategory, selectTime }) {
  const nameCategoria = selectCategory.name;
  const diaServicio = selectTime.data.date;
  const horaServicio = selectTime.hora;

  const partes = diaServicio.split("-");

  const fechaFormateada = `${partes[2]}/${partes[1]}/${partes[0]}`;

  return (
    <div>
      <div>Servicio: {nameCategoria}</div>
      <div>Fecha: {fechaFormateada + " " + horaServicio}</div>
    </div>
  );
}

export default Resume;
