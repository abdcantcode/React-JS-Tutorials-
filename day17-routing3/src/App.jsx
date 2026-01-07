import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Koder from './pages/Koder'
import Kodex from './pages/Kodex'
import AllCourses from './pages/AllCourses'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const apnarouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />,
      children: [
        {
          index: true,          // 👈 DEFAULT PAGE
          element: <AllCourses />
        },
        {
          path: 'koder',
          element: <Koder />
        },
        {
          path: 'kodex',
          element: <Kodex />
        }
      ]
    }
  ])

  return <RouterProvider router={apnarouter} />
}

export default App
