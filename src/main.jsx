import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PostUser from './components/PostUser';
import DisplayUser from './components/DisplayUser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostUser></PostUser>
  },
  {
    path: "/users",
    element: <DisplayUser></DisplayUser>,
    loader: ()=> fetch(`http://localhost:5000/users`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
