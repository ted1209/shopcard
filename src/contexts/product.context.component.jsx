import { createContext, useState, useEffect } from "react";

import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.util";

import SHOP_DATA from "../assets/shop-database";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
        // console.log(categoryMap);
      setCategories(categoryMap);
    };
    getCategoryMap();
  }, []);

  //bat dau day du lieu SHOP_DATA len firebase;

  //   useEffect(() => {
  // addCollectionAndDocuments("categories", SHOP_DATA);
  //   }, []);

  //ket thuc day du lieu len firebase;

  const value = { categories };
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
