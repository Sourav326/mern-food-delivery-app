const RestaurantShimmerCard = () => {
    return(
        <>
            <div class="shadow rounded-md">
                <div class="animate-pulse">
                <div class="rounded bg-slate-200 w-full h-80"></div>
                <div class="flex-1 space-y-6 py-1 px-4">
                    <div class="h-3 bg-slate-200 rounded mt-3 w-2/5"></div>
                    <div class="space-y-3">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="grid grid-cols-4 gap-4 pb-4">
                        <div class="h-6 bg-slate-200 rounded col-span-1"></div>
                        <div class="h-6 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div class="grid grid-cols-4 gap-4 pb-3">
                        <div class="h-6 bg-slate-200 rounded col-span-1"></div>
                        <div class="h-6 bg-slate-200 rounded col-start-4 col-span-1"></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default RestaurantShimmerCard