import React, { useState } from "react";
import SubCategory from "./SubCategory";

function Category({ name, info, setCategory, selectCategory }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const nameWithOutSpace = name.replace(/\s/g, "_"); // Elimino los espacios

  //Le asigno un id al colapsado relacionado con el nombre de la catergoria
  const collapseId = `collapse-${nameWithOutSpace}`;

  //Cambiar entre colapsado y extendido
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center bg-body-secondary m-1 p-1 rounded">
        <span className="ms-1">{name}</span>
        <button
          className="btn collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          onClick={toggleCollapse}
          aria-expanded="false"
          aria-controls={collapseId}
        >
          {isCollapsed ? "+" : "-"}
        </button>
      </div>
      <div className="collapse" id={collapseId}>
        <SubCategory
          data={info}
          setCategory={setCategory}
          selectCategory={selectCategory}
        />
      </div>
    </div>
  );
}

export default Category;
