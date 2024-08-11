import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import procurementPage from "./procurement-page/procurement-page.component.js";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/procurement/:personId" component={procurementPage} />
        <Route path="/procurement" component={procurementPage} exact />
      </Routes>
    </BrowserRouter>
  );
}
