import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/main.sass'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/home.tsx';
import Qualifications from './routes/Qualifications.tsx';
import Experiences from './routes/Experiences.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/qualifications',
        element: <Qualifications/>
      },
      {
        path: '/experiences',
        element: <Experiences/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
