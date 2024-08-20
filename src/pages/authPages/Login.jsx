import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../../../public/backg.jpg';
// import { useAuth } from './AuthProvider';
import { useAuth } from '../../auth/AuthProvider';
// import jwt_decode from "jwt-decode"
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, Setloading] = useState(false);
  const [token, SetToken] = useState("");
  const navigate = useNavigate();
  const notify = () => toast.success("Successfully Logged In");
  const notifyError = errorName => toast.error(errorName);

  const handleSubmit = async (e) => {
    e.preventDefault();
    Setloading(true);
    console.log(email);

    axios.post('http://localhost:8000/auth/login', JSON.stringify({
      email,
      password,
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.data.jwt === "") {
          notifyError("Invalid Credentials");
          setError('Invalid email or password');
        } else {
          const decodedUser = jwtDecode(response.data.jwt);
          if (decodedUser.roles === "ADMIN") {
            handleLogin(response.data.jwt);
            notify();
            navigate("/adminpanel");
          }
          else if(decodedUser.roles === "DOCTOR"){
            handleLogin(response.data.jwt);
            notify();
            navigate("/doctorpanel");

          }
          else if(decodedUser.roles === "PATIENT"){
            handleLogin(response.data.jwt);
            notify();
            navigate("/patientpanel");
          }
          else if(decodedUser.roles === "MANAGER"){
            handleLogin(response.data.jwt);
            notify();
            navigate("/managerpanel");
          }

           else {
            notifyError("Invalid Credentials");
            setError('Invalid email or password');
          }
        }
        setError('');
      })
      .catch(err => {
        // setError('Invalid email or password');
        // notifyError("Internal Error")
      });
  };

  return (
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          {/* <a href="javascript:void(0)">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-40 mb-8 mx-auto block"
            />
          </a> */}

          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">Sign in</h2>
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="text"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="javascript:void(0);" className="text-blue-600 hover:underline font-semibold">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <p className="text-gray-800 text-sm !mt-8 text-center">
                Don't have an account? <a href="javascript:void(0);" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
