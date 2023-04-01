import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Navigation from "./routes/navigation/navigation.component";

import Authentication from "./routes/authentication/authentication.component";

import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import CheckOutPage from "./routes/check-out/check-out.component";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="sign-in" element={<Authentication />} />
          <Route path="check-out" element={<CheckOutPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
