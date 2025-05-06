import React, { Children } from "react";

import App from "../App";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/RegisterPage";
import MainPage from "../pages/MainPage";
import AdminRegisterPage from "../pages/AdminMainPage";
import AdminMainPage from "../pages/AdminMainPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
 
      {
        index: true,
        element: <RegisterPage />,
      },
   
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "mainPage",
        element: <MainPage />,
      },
      {
        path: "AdminMainPage",
        element: <AdminMainPage />,
      },
    
    ],
  },
];
