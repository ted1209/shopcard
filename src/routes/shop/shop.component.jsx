import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../../components/category-preview/category-preview.commponent";
import CategoriesPreview from "../categories-preview/categories-preview.component";


import "./shop.styles.scss";

const Shop = () => {

  // console.log(categories);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<CategoryPreview />}/>
    </Routes>
    // <div className="shop-container">
    //   {Object.keys(categories).map((key) => {
    //     const products  = categories[key];
    //     console.log(products);
    //     return (
    //       <CategoryPreview key={key} title={key} products={products} />
    //     );
    //   })}
    // </div>
  );
};

export default Shop;
