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
import SignIn from './UserStates/SignIn/SignIn.jsx';
import SignUp from './UserStates/SignUp/SignUp.jsx';
import AuthProvider, { AuthContext } from './Provider/AuthProvider.jsx';
import { SkeletonTheme } from 'react-loading-skeleton';



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
        element: <SignIn></SignIn> ,
      },
      {
        path:'/sign_up',
        element: <SignUp></SignUp>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode baseColor="#313131" highlightColor="#525252">
    <AuthProvider>
      <SkeletonTheme>
        <RouterProvider router={router}></RouterProvider>
      </SkeletonTheme>
    </AuthProvider>
  </StrictMode>,
)
