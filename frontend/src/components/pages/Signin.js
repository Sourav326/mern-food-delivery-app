import LoginTemp from '../../images/contacts-1.png'
import { Link } from 'react-router-dom'
const Signin = () => {
    return(
        <>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row my-20 pt-8 px-8 pb-8 lg:gap-16 items-center">
            <img className='w-full md:w-5/12 bg-blend-lighten hover:bg-blend-darken' src={LoginTemp} alt="" />
            <div className="shadow-xl w-4/5 lg:w-3/5 mx-auto p-8">
                <h1 className="text-center text-5xl font-extrabold">Sign In</h1>
                <form action="" className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2">Email</label>
                        <input className="p-3 border rounded" type="email" name="email" placeholder="Enter email" required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-2">Password</label>
                        <input className="p-3 border rounded" type="password" name="password" placeholder="Enter password" required/>
                    </div>
                    <div>
                        <button className="py-3 px-8 bg-lime-600 text-white font-semibold">Submit</button>
                    </div>
                </form>
                <p className='pt-8'>New to foodbox ?  <Link className='text-lime-600' to="/sign-up">Click here</Link></p>
            </div>
        </div>
        </>
    )
}

export default Signin