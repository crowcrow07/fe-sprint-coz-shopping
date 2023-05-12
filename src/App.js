import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./Page/Main";
import ProductsList from "./Page/ProductsList";
import BookMark from "./Page/BookMark";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/list" element={<ProductsList />} />
          <Route path="/bookmark" element={<BookMark />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
