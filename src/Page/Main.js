import { useState, useEffect } from "react";

import ProductCard, {
  getIsBookMarked,
  toggleBookMarked,
} from "../components/ProductCard";
import Products from "../api/Products";

export default function Main({ bookMarkedIdList, setBookMarkedIdList }) {
  const [products, setproducts] = useState(null);
  useEffect(() => {
    Products.getFourProducts()
      .then((res) => res.json())
      .then((json) => {
        setproducts(json);
      });
  }, []);

  return (
    <div className="flex flex-col w-5/6">
      <div className="m-2 font-bold text-2xl">상품 리스트</div>
      <div className="flex flex-row justify-between">
        {products &&
          products.map((data) => {
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
      <div>
        <div className="m-2 font-bold text-2xl">북마크 리스트</div>
        <div className="flex flex-row justify-between">
          {products &&
            products
              .filter((e) => bookMarkedIdList.includes(e.id))
              .map((data, idx) => {
                if (idx <= 3) {
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
                }
              })}
        </div>
      </div>
    </div>
  );
}
