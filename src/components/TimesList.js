import React, { useState, useEffect } from "react";

import Fecha from "./Fecha";

const data = require("../API/slots.json");

function TimesList({ serviceSelect, selectTime, setSelectTime }) {
  const [infoTime, setInfoTime] = useState([]);

  useEffect(() => {
    console.log("Nashe");
    console.log(serviceSelect);
    const infoTimeService = data?.filter(
      (dato) => dato.serviceId == serviceSelect.id
    );

    const sortedData = infoTimeService.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    });

    setInfoTime(sortedData);
  }, [serviceSelect]);

  return (
    <div>
      {infoTime.length > 0 ? (
        <div className="text-start">Proximos turnos disponibles</div>
      ) : (
        <div className="text-start"> No hay turnos disponibles</div>
      )}
      {infoTime?.map((dato) => {
        return (
          <Fecha
            dato={dato}
            selectTime={selectTime}
            setSelectTime={setSelectTime}
          />
        );
      })}
    </div>
  );
}

export default TimesList;
