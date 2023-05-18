import { useState, useEffect } from "react";

import Products from "../api/Products";
import Filter from "../components/Filter";
import ProductCard, {
  getIsBookMarked,
  toggleBookMarked,
} from "../components/ProductCard";

export default function ProductsList({
  bookMarkedIdList,
  setBookMarkedIdList,
}) {
  const [products, setproducts] = useState(null);
  useEffect(() => {
    Products.getAllProducts()
      .then((res) => res.json())
      .then((json) => {
        setproducts(json);
      });
  }, []);

  const [selectType, setSelectType] = useState("All");

  const typeButtonHandler = (type) => {
    if (type === "All") {
      setSelectType("All");
    } else {
      setSelectType(type);
    }
  };

  const productsToRender =
    products &&
    (selectType === "All"
      ? products
      : products.filter((v) => v.type === selectType));

  return (
    <div className="flex flex-col w-screen items-center">
      <div>
        <Filter typeButtonHandler={typeButtonHandler} />
      </div>
      <div className="flex flex-row flex-wrap w-5/6 justify-between">
        {productsToRender &&
          productsToRender.map((data) => {
            return (
              <ProductCard
                key={data.id}
                data={data}
                isBookMarked={getIsBookMarked(bookMarkedIdList, data.id)}
                onClickBookMark={() => {
                  toggleBookMarked(
                    bookMarkedIdList,
                    setBookMarkedIdList,
                    data.id
                  );
                }}
              />
            );
          })}
      </div>
    </div>
  );
}
