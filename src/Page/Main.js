import { useState, useEffect } from "react";

import ProductCard from "../components/ProductCard";
import Products from "../api/Products";

export default function Main({ localDataes, setLocalDataes }) {
  const [productsDataes, setProductsDataes] = useState(null);
  useEffect(() => {
    Products.getFourProducts()
      .then((res) => res.json())
      .then((json) => {
        setProductsDataes(json);
      });
  }, []);
  return (
    <div className="flex flex-col w-5/6">
      <div className="m-2 font-bold text-2xl">상품 리스트</div>
      <div className="flex flex-row justify-between">
        {productsDataes &&
          productsDataes.map((data) => {
            return (
              <ProductCard
                key={data.id}
                productsData={data}
                localDataes={localDataes}
                setLocalDataes={setLocalDataes}
              />
            );
          })}
      </div>
      <div>
        <div className="m-2 font-bold text-2xl">북마크 리스트</div>
        <div className="flex flex-row justify-between">
          {localDataes &&
            localDataes.map((data) => {
              return (
                <ProductCard
                  key={localDataes.id}
                  productsData={data}
                  localDataes={localDataes}
                  setLocalDataes={setLocalDataes}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
