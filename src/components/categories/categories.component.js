import React from "react";

import { CategoryItem } from "../category-item/category-item";

export default function Categories({ categories }) {
  return (
    <div className="cwn-shopping-app categories-cotainer">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}
