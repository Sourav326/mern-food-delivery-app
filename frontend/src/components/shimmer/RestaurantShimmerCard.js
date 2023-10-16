const RestaurantShimmerCard = () => {
    return(
        <>
            <div className="shadow rounded-md">
                <div className="animate-pulse">
                <div className="rounded bg-slate-200 w-full h-80"></div>
                <div className="flex-1 space-y-6 py-1 px-4">
                    <div className="h-3 bg-slate-200 rounded mt-3 w-2/5"></div>
                    <div className="space-y-3">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="grid grid-cols-4 gap-4 pb-4">
                        <div className="h-6 bg-slate-200 rounded col-span-1"></div>
                        <div className="h-6 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 pb-3">
                        <div className="h-6 bg-slate-200 rounded col-span-1"></div>
                        <div className="h-6 bg-slate-200 rounded col-start-4 col-span-1"></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default RestaurantShimmerCard