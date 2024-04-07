import React, { useState, useEffect } from "react";
import SubCategory from "./SubCategory";

function Category({ name, info, setCategory, selectCategory }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const nameWithOutSpace = name.replace(/\s/g, "_");
  const collapseId = `collapse-${nameWithOutSpace}`;

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
