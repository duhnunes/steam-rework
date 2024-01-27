import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/index.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Store from './routes/Store';
import Community from './routes/Community';
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Store />,
      },
      {
        path: 'community',
        element: <Community />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
