import StarIcon from "@mui/icons-material/Star";

export default function ProductCard({
  productsData,
  localDataes,
  setLocalDataes,
  localIdList,
  setLocalIdList,
}) {
  const imgUrl = productsData.image_url;
  const brandImgUrl = productsData.brand_image_url;

  const onClickHandler = () => {
    if (
      localDataes.findIndex((localData) => localData.id === productsData.id) ===
      -1
    ) {
      setLocalDataes([...localDataes, productsData]);
    } else {
      setLocalDataes(
        localDataes.filter((localData) => {
          return localData.id !== productsData.id;
        })
      );
    }
  };

  const isClickedBookMark = (id) => {
    if (localIdList.findIndex((v) => v === productsData.id) === -1) {
      setLocalIdList([...localIdList, id]);
    } else {
      setLocalIdList(
        localIdList.filter((v) => {
          return v !== productsData.id;
        })
      );
    }
  };

  const changeBookmarkBtn = (id) => {
    if (localIdList.findIndex((v) => v === id) === -1) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="flex relative flex-col w-264 h-264">
      <div className="h-4/5">
        <img
          className="h-full w-full rounded-lg"
          src={brandImgUrl ? brandImgUrl : imgUrl}
          alt="상품이미지"
        />
        <div className="absolute bottom-14 right-2" onClick={onClickHandler}>
          <StarIcon
            onClick={() => isClickedBookMark(productsData.id)}
            className="drop-shadow-lg"
            sx={{
              color: () =>
                changeBookmarkBtn(productsData.id) ? "#FFD361" : "#DFDFDF",
              fontSize: 40,
            }}
          />
        </div>
      </div>

      <div className="flex flex-col h-1/5">
        <Bottom productsData={productsData} />
      </div>
    </div>
  );
}

function Bottom({ productsData }) {
  switch (productsData.type) {
    case "Category":
      return <CategoryBottom productsData={productsData} />;
    case "Product":
      return <ProductBottom productsData={productsData} />;
    case "Brand":
      return <BrandBottom productsData={productsData} />;
    case "Exhibition":
      return <ExhibitionBottom productsData={productsData} />;
    default:
      return null;
  }
}

function ProductBottom({ productsData }) {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <div className="font-bold">{productsData.title}</div>
        <div className="text-violet-600">
          {productsData.discountPercentage}%
        </div>
      </div>

      <div className="flex flex-row justify-end">
        <div>{(+productsData.price).toLocaleString()}원</div>
      </div>
    </div>
  );
}

function CategoryBottom({ productsData }) {
  return (
    <div className="w-full">
      <div className="font-bold"># {productsData.title}</div>
    </div>
  );
}

function ExhibitionBottom({ productsData }) {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <div className="font-bold">{productsData.title}</div>
      </div>
      <div className="flex">{productsData.sub_title}</div>
    </div>
  );
}

function BrandBottom({ productsData }) {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="font-bold">{productsData.brand_name}</div>
        <div>관심고객수</div>
      </div>
      <div className="flex flex-row justify-end">
        <div>{(+productsData.follower).toLocaleString()}명</div>
      </div>
    </div>
  );
}
