/* eslint-disable react/no-unescaped-entities */
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, fireDB } from "../../Firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Login = () => {
    const navigate = useNavigate(); 


    const [loginEmail,setLoginEmail]=useState()
    const [loginPassword,setLoginPassword]=useState()
    
    const login=()=>{
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      
      const user = userCredential.user;
      console.log(user)
  
    //   setUser(user)
  
    const userRole = getDocs(collection(fireDB, "users"));

    if (userRole === 'admin') {
        navigate('/admin-dashboard');
    } else {
        navigate('/user-dashboard');
    }

  
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage)
    });
    }



    return (
        <div className='flex justify-center items-center h-screen'>
            {/* Login Form  */}
            <div className="login_Form bg-pink-50 px-1 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-pink-500 '>
                        Login
                    </h2>
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                    onChange={(e)=>{setLoginEmail(e.target.value)}}
                        type="email"
                        placeholder='Email Address'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                    onChange={(e)=>{setLoginPassword(e.target.value)}}

                        type="password"
                        placeholder='Password'
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                    onClick={login}
                        type='button'
                        className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Login
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Don't Have an account <Link className=' text-pink-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Login;