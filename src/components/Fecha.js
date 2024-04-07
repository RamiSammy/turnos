import React, { useState, useEffect } from "react";

function Fecha({ dato, selectTime, setSelectTime }) {
  const handleClick = (data, hora) => {
    const jsonDate = { data, hora };
    if (selectTime?.data === data && selectTime?.hora === hora) {
      setSelectTime(null);
    } else {
      setSelectTime(jsonDate);
    }
    console.log(jsonDate);
  };

  const dataFecha = dato?.date;
  const fecha = new Date(dataFecha);

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dia = fecha.getDate();
  const mes = meses[fecha.getMonth()];
  const fechaFormateada = `${dia} de ${mes}`;
  return (
    <div>
      <div>{fechaFormateada}</div>
      <div className="m-2 p-2">
        {dato.availableTimeslots.map((hora) => (
          <button
            onClick={() => handleClick(dato, hora)}
            type="button"
            className={`btn btn-secondary m-2
             ${
               selectTime?.data === dato && selectTime?.hora === hora
                 ? "active"
                 : ""
             }`}
          >
            {hora}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Fecha;
