import logo from "../logo.png";
import { Link,NavLink } from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return(
        <>

<footer className="bg-white dark:bg-gray-900 border-t border-gray-200">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                  <img src={logo} className="h-8 mr-3" alt="FlowBite Logo" />
                  <div className="logo-text">
                      Food <span className="logo-text-second">Box</span>
                    </div>
              </Link>
          </div>
          <div className="grid grid-cols-2 gap-20 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <NavLink to="/restaurants" className="hover:underline">Restaurants</NavLink>
                      </li>
                      <li className="mb-4">
                          <NavLink to="/about" className="hover:underline">About Us</NavLink>
                      </li>
                      <li>
                            <NavLink to="/contact" className="hover:underline">Contact Us</NavLink>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/Sourav326" target="_blank" className="hover:underline ">Github</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://twitter.com/" target="_blank" className="hover:underline ">Twitter</a>
                      </li>
                      <li>
                          <a href="https://facebook.com" target="_blank" className="hover:underline">Facebook</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">FAQ</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Foodbox</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="https://facebook.com" className="text-gray-500 hover:text-blue-600 dark:hover:text-white">
                  <FacebookOutlinedIcon />
              </a>
              <a href="https://twitter.com/" className="text-gray-500 hover:text-cyan-600 dark:hover:text-white">
                 <TwitterIcon />
              </a>
              <a href="https://github.com/Sourav326" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                 <GitHubIcon />
              </a>
          </div>
      </div>
    </div>
</footer>

        </>
    )
}

export default Footer