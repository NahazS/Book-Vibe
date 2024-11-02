import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Home/Home.jsx';
import Listed_Books from './Listed_Books/Listed_Books.jsx';
import Pages_Chart from './Pages_To_Read/Pages_Chart.jsx';
import BookFullDetails from './Book_Full_Details/BookFullDetails.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path:'/',
        loader: () => fetch('books.json'),
        element: <Home></Home>,
      },
      {
        path:'/:bookId',
        loader: () => fetch('books.json'),
        element: <BookFullDetails></BookFullDetails>
      },
      {
        path:'/listed_books',
        loader: () => fetch('books.json'),
        element: <Listed_Books></Listed_Books>,
      },
      {
        path:'/pages_to_read',
        loader: () => fetch('books.json'),
        element: <Pages_Chart></Pages_Chart>,
      },
      {
        path:'/sign_in',
        element: <h1>Not created this page</h1> ,
      },
      {
        path:'/sign_up',
        element: <h1>Not created this page</h1>,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
