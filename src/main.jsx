import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, {loader as postsLoader} from './routes/Posts'
import PostDetails, {loader as postDetailsLoader} from './routes/PostDetails'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost from './routes/NewPost/NewPost'
import { action as newPostAction } from './routes/NewPost/NewPostForm'
import RootLayout from './routes/RootLayout'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/', 
        element: <Posts />,
        loader: postsLoader, // loads before the element renders - good for any instance where the backend is not slow to respond - look into full course for info on react router features to help with slow backend cases
        children: [
          { 
            path: '/new-post', 
            element: <NewPost />, 
            action: newPostAction 
          },
          { 
            path: ':postId', // note: this is a relative path - add a slash to beginning of a dynamic route to make it an absolute path
            element: <PostDetails />, 
            loader: postDetailsLoader
          } 
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
