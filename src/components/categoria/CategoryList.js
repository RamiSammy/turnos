import React, { useState, useEffect } from "react";

import Category from "./Category";

const data = require("../../API/services.json");

function CategoryList({ selectCategory, setSelectCategory }) {
  const [allCategorias, setCategorias] = useState([]);

  useEffect(() => {
    const categoriasDuplicate = data.services?.map((dato) => dato.category);

    // Si deseas eliminar elementos duplicados del array
    const categoriasUnicas = categoriasDuplicate.filter((valor, indice) => {
      return categoriasDuplicate.indexOf(valor) === indice;
    });
    setCategorias(categoriasUnicas);
  }, []);

  return (
    <div>
      <div className="text-start">Categorias</div>
      {allCategorias?.map((categoria) => {
        const dataCategory = data.services?.filter(
          (dato) => dato.category === categoria
        );

        return (
          <Category
            name={categoria}
            info={dataCategory}
            setCategory={setSelectCategory}
            selectCategory={selectCategory}
          />
        );
      })}
    </div>
  );
}

export default CategoryList;
