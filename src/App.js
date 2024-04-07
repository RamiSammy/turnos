import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Category from "./components/Category";
import CategoryList from "./components/CategoryList";
import TimesList from "./components/TimesList";
import Resume from "./components/Resume";
import ProgressBar from "./components/ProgressBar";
import Confirm from "./components/Confirm";

const data = require("./API/services.json");

function App() {
  const [selectCategory, setSelectCategory] = useState(null);
  const [selectTime, setSelectTime] = useState(null);

  const [showTime, setShowTime] = useState(false);

  const [indiceComponente, setIndiceComponente] = useState(0);

  const [progressbar, setProgresBar] = useState(25);

  const [textoContexto, setTextoContexto] = useState("");

  const handleSiguiente = () => {
    setIndiceComponente((prevIndice) => prevIndice + 1);
  };

  const handleAtras = () => {
    if (indiceComponente == 0) setSelectCategory(null);
    if (indiceComponente == 1) setSelectTime(null);
    setIndiceComponente((prevIndice) => prevIndice - 1);
  };

  useEffect(() => {
    if (indiceComponente == 0) {
      setTextoContexto("Seleccionar servicio");
      setProgresBar(25);
    }
    if (indiceComponente == 1) {
      setProgresBar(50);
      setTextoContexto("Seleccionar horario");
    }
    if (indiceComponente == 2) {
      setProgresBar(75);
      setTextoContexto("Confirmar turno");
    }
    if (indiceComponente == 3) {
      setProgresBar(100);
      setTextoContexto(" ");
    }
  }, [indiceComponente]);

  const reset = () => {
    setIndiceComponente(0);
    setSelectCategory(null);
    setProgresBar(25);
    setSelectTime(null);
  };

  return (
    <div className="container text-center mt-3">
      <div className="row">
        <div className="col-12 text-start ms-3">{textoContexto}</div>
      </div>
      <div className="row">
        <ProgressBar progress={progressbar} />
      </div>
      <div className="row">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-11 border p-2 m-2">
              {indiceComponente === 0 && (
                <CategoryList
                  selectCategory={selectCategory}
                  setSelectCategory={setSelectCategory}
                />
              )}
              {indiceComponente === 1 && (
                <TimesList
                  serviceSelect={selectCategory}
                  selectTime={selectTime}
                  setSelectTime={setSelectTime}
                />
              )}
              {indiceComponente === 2 && (
                <Resume
                  selectCategory={selectCategory}
                  selectTime={selectTime}
                />
              )}
              {indiceComponente === 3 && (
                <Confirm
                  selectCategory={selectCategory}
                  selectTime={selectTime}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 ">
          {indiceComponente !== 0 && indiceComponente !== 3 && (
            <button className="btn btn-secondary" onClick={() => handleAtras()}>
              Atras
            </button>
          )}
        </div>
        {selectCategory != null ? (
          <div className="col-6 ">
            {indiceComponente !== 3 && (
              <button
                onClick={() => handleSiguiente()}
                className="btn btn-secondary"
                disabled={
                  selectCategory == null ||
                  (indiceComponente === 1 && selectTime == null)
                }
              >
                {indiceComponente === 2 ? "Confirmar" : "Siguiente"}
              </button>
            )}
          </div>
        ) : null}
        {indiceComponente === 3 ? (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => reset()}
          >
            Sacar otro turno
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default App;
