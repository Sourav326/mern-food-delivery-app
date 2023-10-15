import signup from "../../images/photo-10.png"
import { Link } from 'react-router-dom'
const Signup = () => {
    return(
        <>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row my-20 pt-8 lg:px-8 pb-8 lg:gap-16 items-center">
            <img className='sm:w-full md:w-5/12 bg-blend-lighten hover:bg-blend-darken' src={signup} alt="" />
            <div className="shadow-xl sm:w-full lg:w-3/5 mx-auto p-8">
                <h1 className="text-center text-5xl font-extrabold">Sign Up</h1>
                <form action="" className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2">Name</label>
                        <input className="p-3 border rounded" type="text" name="nam" placeholder="Enter name" required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2">Email</label>
                        <input className="p-3 border rounded" type="email" name="email" placeholder="Enter email" required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="mb-2">Phone</label>
                        <input className="p-3 border rounded" type="text" name="phone" placeholder="Enter phone" required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-2">Password</label>
                        <input className="p-3 border rounded" type="password" name="password" placeholder="Enter password" required/>
                    </div>
                    <div>
                        <button className="py-3 px-8 bg-lime-600 text-white font-semibold">Submit</button>
                    </div>
                </form>
                <p className='pt-8'>Already have a account ?  <Link className='text-lime-600' to="/sign-in">Click here</Link></p>
            </div>
        </div>
        </>
    )
}

export default Signup