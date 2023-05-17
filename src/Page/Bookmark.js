import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";

export default function BookMark({
  localDataes,
  setLocalDataes,
  localIdList,
  setLocalIdList,
  isBookmarked,
  setIsBookmarked,
}) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-end">
        <Filter />
      </div>

      <div className="flex flex-row w-5/6 flex-wrap justify-between">
        {localDataes &&
          localDataes.map((data) => {
            return (
              <ProductCard
                key={data.id}
                productsData={data}
                localDataes={localDataes}
                setLocalDataes={setLocalDataes}
                localIdList={localIdList}
                setLocalIdList={setLocalIdList}
                isBookmarked={isBookmarked}
                setIsBookmarked={setIsBookmarked}
              />
            );
          })}
      </div>
    </div>
  );
}
