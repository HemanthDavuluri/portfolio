import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root_element = document.getElementById("root");

const root = ReactDOM.createRoot(document.getElementById("root"));
const root_hydrate = ReactDOM.hydrateRoot(document.getElementById("root"));

if (root_element.hasChildNodes()) {
  root_hydrate.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
} else {
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

reportWebVitals();
