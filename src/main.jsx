import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main.jsx'
import Home from './components/Home/Home.jsx'
import Courses from './components/Courses/Courses.jsx'
import About from './components/About/About.jsx'
import Topics from './components/Topics/Topics.jsx'
import Details from './components/Details/Details.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,

      },
      {
        path: "/courses/:id",
        element: <Topics></Topics>,
        loader: ({params}) => {
          return fetch(`http://localhost:5000/courses/${params.id}`);
        }
      },
      {
        path: "/topic/:id",
        element: <Details></Details>,
        loader: ({params}) => {
          return fetch(
            `http://localhost:5000/courses/topic/${params.id}`
          );
        }
      },
      {
        path: "/about",
        element:<About></About>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
