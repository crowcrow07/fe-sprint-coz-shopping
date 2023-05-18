export default function Filter() {
  return (
    <div className="flex justify-center items-center w-screen h-32  m-4">
      <div className="flex justify-between w-1/2">
        <div className="flex flex-col items-center cursor-pointer">
          <img
            className="w-20 h-20  rounded-full"
            src="/image/전체.jpeg"
            alt="전체"
          />
          <div className="m-2">전체</div>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img
            className="w-20 h-20 rounded-full"
            src="/image/상품.jpeg"
            alt="상품"
          />
          <div className="m-2">상품</div>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img
            className="w-20 h-20 rounded-full"
            src="/image/카테고리.jpeg"
            alt="카테고리"
          />
          <div className="m-2">카테고리</div>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img
            className="w-20 h-20 rounded-full"
            src="/image/기획전.jpeg"
            alt="기획전"
          />
          <div className="m-2">기획전</div>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img
            className="w-20 h-20 rounded-full"
            src="/image/브랜드.jpeg"
            alt="브랜드"
          />
          <div className="m-2">브랜드</div>
        </div>
      </div>
    </div>
  );
}
