import RestaurantShimmerCard from "./RestaurantShimmerCard";

const RestaurantShimmer = () => {
  return (
    <>
      <div className="w-4/6 h-4 bg-slate-200 rounded"></div>
      <div className="grid grid-cols-12 gap-4 py-5 mt-4">
        <div className="h-8 bg-slate-200 rounded col-span-1"></div>
        <div className="h-8 bg-slate-200 rounded col-span-1"></div>
        <div className="h-8 bg-slate-200 rounded col-span-1"></div>
        <div className="h-8 bg-slate-200 rounded col-start-7 col-span-6"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-6">
        <RestaurantShimmerCard />
        <RestaurantShimmerCard />
        <RestaurantShimmerCard />
      </div>
    </>
  );
};
export default RestaurantShimmer;
