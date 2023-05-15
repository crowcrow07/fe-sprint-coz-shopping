export default function ProductCard({ productsData }) {
  const type = productsData.type;
  const imgUrl = productsData.image_url;
  const brandImgUrl = productsData.brand_image_url;
  const title = productsData.title;
  const subTitle = productsData.sub_title;
  const brandName = productsData.brand_name;
  const price = productsData.price;
  const discountPercentage = productsData.discountPercentage;
  const follower = productsData.follower;

  const renderTitle = () => {
    switch (type) {
      case "Category":
        return `#${title}`;
      case "Product":
        return title;
      case "Brand":
        return brandName;
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

  return (
    <div className="flex flex-col w-264 h-264 border">
      <div className="h-4/5">
        <img
          className="h-full w-full"
          src={brandImgUrl ? brandImgUrl : imgUrl}
          alt="상품이미지"
        />
      </div>
      <div className="flex flex-col h-1/5">
        <div className="flex flex-row justify-between">
          <div>{renderTitle()}</div>
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
