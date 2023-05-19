import { useEffect, useState } from "react";
import Products from "../api/Products";
import Filter from "../components/Filter";
import ProductCard, {
  getIsBookMarked,
  toggleBookMarked,
} from "../components/ProductCard";

export default function BookMark({ bookMarkedIdList, setBookMarkedIdList }) {
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
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-end">
        <Filter typeButtonHandler={typeButtonHandler} />
      </div>

      <div className="flex flex-row w-5/6 flex-wrap justify-between">
        {productsToRender &&
          productsToRender
            .filter((e) => bookMarkedIdList.includes(e.id))
            .map((data) => {
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
