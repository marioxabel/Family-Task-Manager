// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import ChildPage from'./components/Pages/ChildPage.jsx';
import Login from './components/Pages/Login.jsx';
import ParentPage from './components/Pages/ParentPage.jsx';
import Register from './components/Pages/Register.jsx';
import ErrorPage from './components/Pages/ErrorPage.jsx';
import TestPage from './components/Pages/TestPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/childpage',
        element: <ChildPage />,
      },
      {
        path: '/parentpage',
        element: <ParentPage />,
      },
      {
        path: '/registration',
        element: <Register />,
      },
      {
        path: '/test',
        element: <TestPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);