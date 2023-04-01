import "./categories-preview.style.scss";
import { Fragment, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../../components/category-preview/category-preview.commponent";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/product.context.component";

const CategoriesPreview = ()=>{
    const { categories } = useContext(CategoriesContext);
    // console.log(categories);
  
    return (
      <Fragment>
        {Object.keys(categories).map((key) => {
          const products  = categories[key];
        //   console.log(products);
          return (
            <CategoryPreview key={key} title={key} products={products} />
          );
        })}
      </Fragment>
    );
}

export default CategoriesPreview;
