import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Posts'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost from './components/NewPost/NewPost'
import RootLayout from './routes/RootLayout'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/new-post', element: <NewPost /> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
