import { useState, useEffect } from "react";

import Products from "../api/Products";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";

export default function ProductsList({
  localDataes,
  setLocalDataes,
  localIdList,
  setLocalIdList,
  isBookmarked,
  setIsBookmarked,
}) {
  const [productsDataes, setProductsDataes] = useState(null);
  useEffect(() => {
    Products.getAllProducts()
      .then((res) => res.json())
      .then((json) => {
        setProductsDataes(json);
      });
  }, []);

  return (
    <div className="flex flex-col w-screen items-center">
      <div>
        <Filter />
      </div>
      <div className="flex flex-row flex-wrap w-5/6 justify-between">
        {productsDataes &&
          productsDataes.map((data) => {
            return (
              <ProductCard
                key={data.id}
                productsData={data}
                localDataes={localDataes}
                setLocalDataes={setLocalDataes}
                localIdList={localIdList}
                setLocalIdList={setLocalIdList}
                isBookmarked={isBookmarked}
                setIsBookmarked={setIsBookmarked}
              />
            );
          })}
      </div>
    </div>
  );
}
