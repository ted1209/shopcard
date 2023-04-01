import React from 'react'
import { Outlet } from 'react-router-dom';

import categories from "../../assets/categories.json";


import Categories from "../../components/categories/categories.component";



export default function Home() {
  return (
    <div>
      <Categories categories={categories} />
      <Outlet />
    </div>
  )
}