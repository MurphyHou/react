import Login from '../pages/Login'
import Article from '../pages/Article'
import Layout from '../pages/Layout'
import Board from '../pages/Board'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Board />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/article/:id/:name',
    element: <Article />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
