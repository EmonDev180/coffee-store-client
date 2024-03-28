import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import AddCoffee from './Components/AddCoffee';
import Update from './Components/Update';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path:"/addcoffee",
    element:<AddCoffee></AddCoffee>
  },
  {
    path:"/update/:id",
    element:<Update></Update>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
