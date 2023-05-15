import { useState, useEffect } from "react";

import ProductCard from "../components/ProductCard";
import Products from "../api/Products";

export default function Main() {
  const [productsDataes, setProductsDataes] = useState(null);
  useEffect(() => {
    Products.getFourProducts()
      .then((res) => res.json())
      .then((json) => {
        setProductsDataes(json);
      });
  }, []);
  return (
    <div className="flex">
      {productsDataes &&
        productsDataes.map((data) => {
          return <ProductCard productsData={data} />;
        })}
    </div>
  );
}
