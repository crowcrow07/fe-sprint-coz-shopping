import { useState } from "react";

export default function Filter({ typeButtonHandler }) {
  const [checkedHandler, setCheckedHandler] = useState("All");

  return (
    <div className="flex justify-center items-center w-screen h-32  m-4">
      <div className="flex justify-between w-1/2">
        <div
          className={`flex flex-col items-center cursor-pointer ${
            checkedHandler === "All"
              ? `font-bold text-violet-600 underline`
              : ``
          }`}
          onClick={() => {
            typeButtonHandler("All");
            setCheckedHandler("All");
          }}
        >
          <img
            className="w-20 h-20  rounded-full"
            src="/image/전체.jpeg"
            alt="전체"
          />
          <div className="m-2">전체</div>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${
            checkedHandler === "Product"
              ? `font-bold text-violet-600 underline`
              : ``
          }`}
          onClick={() => {
            typeButtonHandler("Product");
            setCheckedHandler("Product");
          }}
        >
          <img
            className="w-20 h-20 rounded-full"
            src="/image/상품.jpeg"
            alt="상품"
          />
          <div className="m-2">상품</div>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${
            checkedHandler === "Category"
              ? `font-bold text-violet-600 underline`
              : ``
          }`}
          onClick={() => {
            typeButtonHandler("Category");
            setCheckedHandler("Category");
          }}
        >
          <img
            className="w-20 h-20 rounded-full"
            src="/image/카테고리.jpeg"
            alt="카테고리"
          />
          <div className="m-2">카테고리</div>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${
            checkedHandler === "Exhibition"
              ? `font-bold text-violet-600 underline`
              : ``
          }`}
          onClick={() => {
            typeButtonHandler("Exhibition");
            setCheckedHandler("Exhibition");
          }}
        >
          <img
            className="w-20 h-20 rounded-full"
            src="/image/기획전.jpeg"
            alt="기획전"
          />
          <div className="m-2">기획전</div>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${
            checkedHandler === "Brand"
              ? `font-bold text-violet-600 underline`
              : ``
          }`}
          onClick={() => {
            typeButtonHandler("Brand");
            setCheckedHandler("Brand");
          }}
        >
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
