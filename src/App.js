import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./Page/Main";
import ProductsList from "./Page/ProductsList";
import BookMark from "./Page/BookMark";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/list" element={<ProductsList />} />
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="*" element={<div>없는페이지임</div>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
