import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './auth/AuthProvider.jsx';
import { ChakraProvider } from '@chakra-ui/react'

import { ToastContainer, toast } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <AuthProvider>
   <ChakraProvider>
      <App />
    </ChakraProvider>
   <ToastContainer/>
   </AuthProvider>
       
   </BrowserRouter>
     
  </React.StrictMode>
)
