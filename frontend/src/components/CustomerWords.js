import Client from '../images/testimonial-client.png'
import Client1 from '../images/client1.webp'
import RestroCarausel from './RestroCarausel'




const CustomerWords = () => {
    return(
        <>
        <div className="bg-slate-100">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 mx-auto max-w-screen-xl justify-between py-8 items-center">
                <div className="flex flex-col justify-center items-center w-96 px-2">
                    <img className="w-4/6" src={Client} alt={Client} />
                    <h2 className="text-3xl font-bold text-center leading-10">
                        Here's what our customers say
                    </h2>
                </div>
                {/* <div className="h-80 w-full">
                    <img src={Client1} className="h-full w-full rounded-3xl" alt={Client1}  />
                </div> */}
                <RestroCarausel />

            </div>
        </div>
        </>
    )
}

export default CustomerWords