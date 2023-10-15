import PageHeader from "./PageHeader"
import Benefits from "../Benefits";
import CustomerWords from "../CustomerWords";
import scooter from "../../images/scooter-man.svg"

const About = () => {
    return(
        <>
            <PageHeader title="About us"/>
            <div className="mx-auto w-full max-w-screen-xl">
                <p className="py-5 text-lg text-slate-500 text-justify lg:text-center lg:px-16 px-4">We build innovative products & solutions that deliver unparalleled convenience to urban consumers.
                    The best part? Every bit of your work at Foodbox will help elevate the lives of our users across India.
                </p>
                <Benefits />
            </div>
            <CustomerWords />
            <div className="mx-auto w-full max-w-screen-xl py-16 ">
                <div className="flex justify-between items-center bg-[#feffcb] p-8 rounded-xl">
                    <div>
                        <p className="capitalize text-4xl font-extrabold">doorstep delivery</p>
                        <p className="text-2xl py-4 capitalize">We will deliver your tasty food at your doorstep</p>
                    </div>
                    <img src={scooter} alt={scooter} className="w-[250px] relative top-14 right-20" />
                </div>
            </div>
        </>
    )
}

export default About