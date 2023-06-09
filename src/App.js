import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import ContactPage from './components/ContactPage/ContactPage';
import DocumentPage from './components/DocumentPage/DocumentPage';
import UserPage from './components/UserPage/UserPage';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { useState } from 'react';
import DarkLayout from './components/DarkLayout/DarkLayout';
import LightLayout from './components/LightLayout/LightLayout';




function App() {



  //Strona jest podzielona na Dark = login
  // oraz Light = cała reszta
  //jest tak bo nie mogą być te same routy a light jest od /
  const router = createBrowserRouter([
    {path: '/',
    element: <LightLayout/>,
    children: [
      {path: '/', element: <MainPage/>},
      {path: '/user', element: <UserPage/>}, //to ma być strona która działa na pobranych danych i jest inna dla każdego usera
      {path: '/contact', element: <ContactPage/>}
    ]},
    {path: '/login',
    element: <DarkLayout/>,
    children: [
      {path: '/login', element: <LoginPage/>}
    ]},
  ])


  return (
    <RouterProvider router={router} ></RouterProvider>
  );
}

export default App;
