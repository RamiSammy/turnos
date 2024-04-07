import React, { useState, useEffect } from "react";

function SubCategory({ data, setCategory, selectCategory }) {
  const handleClick = (item) => {
    if (selectCategory == item) {
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
