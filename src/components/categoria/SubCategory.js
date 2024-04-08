import React from "react";

function SubCategory({ data, setCategory, selectCategory }) {
  //Manejo al realizar clic en un servicio
  const handleClick = (item) => {
    // si la categoría seleccionada es la misma que el elemento clicado, deseleccionarla, caso contrario lo guarda
    if (selectCategory === item) {
      setCategory(null);
    } else {
      setCategory(item);
    }
  };

  return (
    <div>
      {data?.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between border m-2"
        >
          <div>
            <p className="text-start ms-2">{item.name}</p>
            <p className="text-start ms-2">{item.description}</p>
          </div>
          <button
            onClick={() => handleClick(item)}
            className={`btn btn-primary m-2 p-2 btn-block ${
              selectCategory === item ? "active" : ""
            }`}
          >
            Seleccionar
          </button>
        </div>
      ))}
    </div>
  );
}

export default SubCategory;
