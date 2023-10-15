import Newsletter from "../images/illustration-4.png"
const Subscribe = () => {
    return(
        <>
        <div className="mt-16">
            <div className="flex flex-col gap-8 lg:flex-row max-w-7xl mx-auto py-16 justify-between items-center px-8">
                <img src={Newsletter} alt="Newsletter image" className="lg:w-2/5 w-full drop-shadow-[0px_5px_250px_green]" />
                <div className="w-full lg:w-2/5">
                    <h1 className="capitalize text-2xl lg:text-4xl font-extrabold leading-tight text-center lg:text-left">
                    Get the menu of your 
                    <span className="logo-text-second"> favorite Restaurants </span>
                     every day
                    </h1>
                    <form action="" className="flex flex-col lg:flex-row gap-4 pt-8">
                        <input className="p-3 border w-full" type="email" name="email" placeholder="Enter email" required/>
                        <button className="py-3 px-8 bg-lime-600 text-white  ">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Subscribe