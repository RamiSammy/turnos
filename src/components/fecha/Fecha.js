import React from "react";

function Fecha({ dato, selectTime, setSelectTime }) {
  //Me guardo el dato y la hora de la fecha seleccionada
  const handleClick = (data, hora) => {
    const jsonDate = { data, hora };
    if (selectTime?.data === data && selectTime?.hora === hora) {
      setSelectTime(null);
    } else {
      setSelectTime(jsonDate);
    }
  };

  //Obtengo la fecha que se busca
  const dataFecha = dato?.date;
  const partes = dataFecha.split("-");

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

  const fechaFormateada = `${partes[2]} de ${meses[partes[1] - 1]}`;

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
