import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AllTweets from './pages/AllTweets';
import MyTweets from './pages/MyTweets';
import NotFound from './pages/NotFound';
import Login from './pages/Login/Login';
import { AuthProvider } from './context/AuthContext';
import AuthService from './service/auth';

const authService = new AuthService();

const router = createBrowserRouter([
  {
    path: "/",
    element: (<AuthProvider authService={authService}>
                <App/>
              </AuthProvider>),
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        path: "/",
        element: <AllTweets/>
      },
      {
        path: "/:username",
        element: <MyTweets/>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
