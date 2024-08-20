import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import ErrorPage from '../pages/ErrorPage';
function PatientRoute({children}) {
    const {user,loggedIn}=useAuth();
  
     if(user?.roles==="PATIENT"){
        return <>{children}</>
     }
     else return <ErrorPage/>
  
}

export default PatientRoute