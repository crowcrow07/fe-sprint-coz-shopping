export default function ProductCard({ productsData }) {
  //타입이 뭔지 검사한다.
  //타입이 Product라면 title과 price, discountPercentage가 있어야함
  //타입이 Category라면 title만 있으면됨
  //타입이 Exhibition라면 title과 sub_title이 있어야함
  //타입이 Brand라면 brand_name과 follower가 있어야함
  console.log(productsData);
  return (
    <div className="flex-col w-264 h-264 border">
      <div className="h-4/5">
        <img
          className="h-full"
          src="https://images.unsplash.com/photo-1626372416494-3183a0c4f726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80"
          alt="상품이미지"
        />
      </div>
      <div className="h-1/5">상품설명공간</div>
    </div>
  );
}
