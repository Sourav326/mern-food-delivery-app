import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Error from './components/pages/Error';
import Contact from './components/pages/Contact';
import Signin from './components/pages/Signin';
import Restaurant from './components/pages/Restaurant';
import Signup from './components/pages/Signup';
import SingleRestaurant from './components/pages/SingleRestaurant';
import Cart from './components/pages/Cart';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/restaurants",
        element:<Restaurant />
      },
      {
        path:"/sign-in",
        element:<Signin />
      },
      {
        path:"/sign-up",
        element:<Signup />
      },
      {
        path:"/restaurant/:id",
        element:<SingleRestaurant />
      },
      {
        path:"/cart",
        element:<Cart />
      }
    ],
    errorElement:<Error />
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
