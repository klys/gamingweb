import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BoostrapTest from './BoostrapTest';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './account/SignIn';
import LogIn from './account/LogIn';
import Sidebar from './main/Sidebar';
import Navbar from './main/Navbar'
import Layout from './main/Layout';

import Create from './account/Create';
import DescargarCliente from './download/DescargarCliente';
import Message from './alerts/Message';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
  },
  {
    path: "/hello",
    element: <div>Hello world!</div>,
  },
  {
    path: "/bs",
    element: <BoostrapTest/>,
  },
  {
    path: "/signin",
    element: <SignIn/>
  },
  {
    path: '/sidebar',
    element: <Sidebar/>
  },
  {
    path: '/navbar',
    element: <Navbar/>
  },
  {
    path: "/layout",
    element: <Layout/>
  },
  {
    path: "/layout/test", // deletable
    element: <Layout><h1>testing</h1></Layout>
  },
  {
    path: "/cuenta/crear",
    element: <Layout><Create/></Layout>
  },
  {
    path: "/cuenta/iniciar",
    element: <Layout><LogIn/></Layout>
  },
  {
    path: "/cuenta/crear/logrado",
    element: <Layout><Message/></Layout>
  },
  {
    path: "/descargas",
    element: <Layout><DescargarCliente/></Layout>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
