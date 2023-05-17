import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Main from "./Page/Main";
import ProductsList from "./Page/ProductsList";
import BookMark from "./Page/BookMark";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [localDataes, setLocalDataes] = useState([]);

  return (
    <div className="App">
      <div className="flex flex-col w-screen h-screen justify-between">
        <Header />
        <div className="flex justify-center w-screen">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  localDataes={localDataes}
                  setLocalDataes={setLocalDataes}
                />
              }
            />
            <Route
              path="/products/list"
              element={
                <ProductsList
                  localDataes={localDataes}
                  setLocalDataes={setLocalDataes}
                />
              }
            />
            <Route
              path="/bookmark"
              element={
                <BookMark
                  localDataes={localDataes}
                  setLocalDataes={setLocalDataes}
                />
              }
            />
            <Route path="*" element={<div>없는페이지임</div>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
