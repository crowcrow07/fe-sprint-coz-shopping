import { useState } from "react";

import StarIcon from "@mui/icons-material/Star";

export default function ProductCard({
  productsData,
  localDataes,
  setLocalDataes,
}) {
  const type = productsData.type;
  const imgUrl = productsData.image_url;
  const brandImgUrl = productsData.brand_image_url;
  const title = productsData.title;
  const subTitle = productsData.sub_title;
  const brandName = productsData.brand_name;
  const price = productsData.price;
  const discountPercentage = productsData.discountPercentage;
  const follower = productsData.follower;

  const [onClickBookMark, setOnClickBookMark] = useState(false);

  const renderTitle = () => {
    switch (type) {
      case "Category":
        return `#${title}`;
      case "Product":
        return title;
      case "Brand":
        return brandName;
      case "Exhibition":
        return title;
      default:
        return null;
    }
  };

  const renderPrice = () => {
    if (!price) {
      return follower;
    }
    return (+price).toLocaleString();
  };

  const onClickHandler = () => {
    setOnClickBookMark(!onClickBookMark);
    if (
      localDataes.findIndex((localData) => localData.id === productsData.id) ===
      -1
    ) {
      setLocalDataes([...localDataes, productsData]);
    } else if (
      localDataes.findIndex((localData) => localData.id === productsData.id) !==
      -1
    ) {
      setLocalDataes(
        localDataes.filter((localData) => {
          return localData.id !== productsData.id;
        })
      );
    }
  };

  return (
    <div className="flex relative flex-col w-264 h-264">
      <div className="h-4/5">
        <div className="absolute bottom-14 right-2" onClick={onClickHandler}>
          <StarIcon
            className="drop-shadow-lg"
            sx={{
              color: onClickBookMark ? "#FFD361" : "#DFDFDF",
              fontSize: 40,
            }}
          />
        </div>
        <img
          className="h-full w-full rounded-lg"
          src={brandImgUrl ? brandImgUrl : imgUrl}
          alt="상품이미지"
        />
      </div>
      <div className="flex flex-col h-1/5">
        <div className="flex flex-row justify-between">
          <div className="font-bold">{renderTitle()}</div>
          <div className={discountPercentage ? "text-violet-600" : ""}>
            {discountPercentage
              ? `${discountPercentage}%`
              : type === "Brand"
              ? "관심고객수"
              : null}
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>{subTitle}</div>
          <div>{renderPrice()}</div>
        </div>
      </div>
    </div>
  );
}
