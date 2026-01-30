import { lazy, Suspense } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import Error from './components/Error.jsx'
// import Grocery from './components/Grocery.jsx'
import './style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'


const Grocery = lazy(() => import("./components/Grocery.jsx"))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    errorElement: <Error />
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
      </>
    )
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contact />
      </>
    )
  },
  {
    path: "/grocery",
    element: (
      <>
        <Header />
        <Suspense fallback ={<h1>Loading...</h1>}>
        <Grocery />
        </Suspense>
      </>
    )
  },
  {
    path: "/restaurants/:resId",
    element: (
      <>
        <Header />
        <RestaurantMenu />
      </>
    )
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
