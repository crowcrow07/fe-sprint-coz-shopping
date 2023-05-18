import StarIcon from "@mui/icons-material/Star";
import TransitionsModal from "./Modal";

export function getIsBookMarked(bookMarkedIdList, id) {
  return bookMarkedIdList.includes(id);
}

export function toggleBookMarked(bookMarkedIdList, setBookMarkedIdList, id) {
  if (!getIsBookMarked(bookMarkedIdList, id)) {
    setBookMarkedIdList([...bookMarkedIdList, id]);
  } else {
    setBookMarkedIdList(
      bookMarkedIdList.filter((v) => {
        return v !== id;
      })
    );
  }
}

export default function ProductCard({ data, isBookMarked, onClickBookMark }) {
  const imgUrl = data.image_url;
  const brandImgUrl = data.brand_image_url;

  const imgSelector = () => {
    if (brandImgUrl) {
      return brandImgUrl;
    } else {
      return imgUrl;
    }
  };

  const titleSelector = () => {
    if (data.title) {
      return data.title;
    } else {
      return data.brand_name;
    }
  };

  return (
    <div className="flex relative flex-col w-264 h-264 cursor-default">
      <TransitionsModal
        imgSelector={imgSelector()}
        titleSelector={titleSelector()}
        onClickBookMark={onClickBookMark}
        isBookMarked={isBookMarked}
      />
      <div className="h-4/5">
        <img
          className="h-full w-full rounded-lg"
          src={imgSelector()}
          alt="상품이미지"
        />

        <div className="absolute bottom-14 right-2">
          <StarIcon
            onClick={() => {
              onClickBookMark();
            }}
            className="drop-shadow-lg cursor-pointer"
            sx={{
              color: isBookMarked ? "#FFD361" : "#DFDFDF",
              fontSize: 40,
            }}
          />
        </div>
      </div>

      <div className="flex flex-col h-1/5">
        <Bottom data={data} />
      </div>
    </div>
  );
}

function Bottom({ data }) {
  switch (data.type) {
    case "Category":
      return <CategoryBottom data={data} />;
    case "Product":
      return <ProductBottom data={data} />;
    case "Brand":
      return <BrandBottom data={data} />;
    case "Exhibition":
      return <ExhibitionBottom data={data} />;
    default:
      return null;
  }
}

function ProductBottom({ data }) {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <div className="font-bold">{data.title}</div>
        <div className="text-violet-600">{data.discountPercentage}%</div>
      </div>

      <div className="flex flex-row justify-end">
        <div>{(+data.price).toLocaleString()}원</div>
      </div>
    </div>
  );
}

function CategoryBottom({ data }) {
  return (
    <div className="w-full">
      <div className="font-bold"># {data.title}</div>
    </div>
  );
}

function ExhibitionBottom({ data }) {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <div className="font-bold">{data.title}</div>
      </div>
      <div className="flex">{data.sub_title}</div>
    </div>
  );
}

function BrandBottom({ data }) {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="font-bold">{data.brand_name}</div>
        <div>관심고객수</div>
      </div>
      <div className="flex flex-row justify-end">
        <div>{(+data.follower).toLocaleString()}명</div>
      </div>
    </div>
  );
}
