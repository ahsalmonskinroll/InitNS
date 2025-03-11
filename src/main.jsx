import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import ReactDOM from "react-dom/client";
import "./design/style.css"
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Profile from './pages/profile.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  // sayfa bulamadığında error vermemesi için
  {
    path: "*",
    element: < Navigate to="/" replace />,
  },
  {
    path: "/profile",
    element: < Profile />,
  },
  /*
  {
  path: "/admin",
  element: (
  <ProtectedRoute>
    <Admin/>
  </ProtectedRoute>
  )
  }
  */
])





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}>*/}
      <RouterProvider router={router} />
    {/* <Provider> */}
  </React.StrictMode>
)
