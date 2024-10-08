import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom';
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home.jsx"
import ErrorPage from './pages/ErrorPage.jsx';
import AdminPanel from './pages/admin/AdminPanel.jsx'
import DoctorPanel from './pages/doctor/DoctorPanel.jsx'
import PatientPanel from './pages/patient/PatientPanel.jsx'
import MangerPanel from './pages/manager/ManagerPanel.jsx'


import { useAuth } from './auth/AuthProvider.jsx';
import Login from './pages/authPages/Login.jsx';
function App() {
  const { loggedIn } = useAuth();

  return (
    <>
<Header/>

   <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="adminpanel" element={<AdminPanel/>}></Route>
        <Route path="doctorpanel" element={<DoctorPanel/>}></Route>
        <Route path="patientpanel" element={<PatientPanel/>}></Route>
        <Route path="managerpanel" element={<MangerPanel/>}></Route>
        {/* <Route path="faculty" element={<FacultyLogin/>}></Route>
        <Route path="admin" element={<AdminLogin/>}></Route>

        <Route path="adminpanel" element={<AdminRoute><AdminHome/></AdminRoute>}></Route> */}

        {/* <Route path="adminpanel" element={<AdminHome/>}></Route> */}
        {/* <Route path="studentpanel" element={<StudentRoute><StudentDash/></StudentRoute>}></Route>
        <Route path="facultypanel" element={<FacultyRoute><FacultyPanel/></FacultyRoute>}></Route> */}

        <Route path="*" element={<ErrorPage/>}></Route>
        {/* <Route path='studentpanel' element={<StudentDash/>} </Route> */}
        {/* <Route path="products/1001" element={<ProductDetail />}></Route>
        <Route path="contact" element={<Contact />}></Route> */}
      </Routes>


   {/* <Footer/> */}
   

    </>
  )
}

export default App
