import React from "react";

function Categories ({value, onClickAction}) {
  const categoryData = ['Все', 'Технические', 'Гуманитарные', 'Художественные'];

  return (
    <div className="categories">
      <ul>
        {categoryData.map((e, i) => (
          <li key={i} onClick={() => onClickAction(i)} className={value === i ? 'active' : ''}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;