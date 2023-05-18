import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Main from "./Page/Main";
import ProductsList from "./Page/ProductsList";
import BookMark from "./Page/BookMark";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [bookMarkedIdList, setBookMarkedIdList] = useState([]);
  const [bookMarkedList, setBookMarkedList] = useState([]);

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
                  bookMarkedIdList={bookMarkedIdList}
                  setBookMarkedIdList={setBookMarkedIdList}
                />
              }
            />
            <Route
              path="/products/list"
              element={
                <ProductsList
                  bookMarkedIdList={bookMarkedIdList}
                  setBookMarkedIdList={setBookMarkedIdList}
                  bookMarkedList={bookMarkedList}
                  setBookMarkedList={setBookMarkedList}
                />
              }
            />
            <Route
              path="/bookmark"
              element={
                <BookMark
                  bookMarkedIdList={bookMarkedIdList}
                  setBookMarkedIdList={setBookMarkedIdList}
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
