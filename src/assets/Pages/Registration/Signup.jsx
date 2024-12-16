// /* eslint-disable react/no-unescaped-entities */
// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// // import myContext from "../../context/myContext";
// // import { Timestamp, addDoc, collection } from "firebase/firestore";
// import {auth, fireDB } from "../../Firebase/firebaseConfig";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// // import toast from "react-hot-toast";
// import Loader from "../../components/Loader";
// import myContext from "../../../context/myContext";
// // import React from 'react';
// import { toast } from "react-toastify";

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FireBaseContext } from "../../../context/myContext";
import {  createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../Firebase/firebaseConfig";
// import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../Firebase/firebaseConfig";

// const Signup = () => {
//     const context = useContext(myContext);
//     const {loading, setLoading } = context;

//     // navigate
//     const navigate = useNavigate();

//     // User Signup State
//     const [userSignup, setUserSignup] = useState({
//         name: "",
//         email: "",
//         password: "",
//         role: "user"
//     });
// //    console.log(userSignup)
// //    console.log(context)
// //    const [email,setEmail]=useState()
// //   const [password,setPassword]=useState()

//     // User Signup Function

//     const [errorMessage,setErrorMessage]=useState()

//     const signup =()=>{
//         createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password).then((userCredential)=> {

//           const user = userCredential.user;
//           setUserSignup(user)
//         //   toast.success("Signup Successfully");
//           console.log("Registered successfully")
//           toast.success("success")
//           navigate('/user-dashboard')

//         })
//         .catch((error) => {
//             setErrorMessage  (error.message)
//           console.log(errorMessage)

//         });

//       }

// const userSignupFunction = async () => {
// validation
// if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
//     toast.error("All Fields are required")
// }

// setLoading(true);
// try {
//     const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

//     // create user object
//     const user = {
//         name: userSignup.name,
//         email: users.user.email,
//         uid: users.user.uid,
//         role: userSignup.role,
//         time: Timestamp.now(),
//         date: new Date().toLocaleString(
//             "en-US",
//         {
//             month: "short",
//             day: "2-digit",
//             year: "numeric",
//         }
//     )
// }

// create user Refrence
// const userRefrence = collection(fireDB, "user")

// Add User Detail
// addDoc(userRefrence, user);

//     setUserSignup({
//         name: "",
//         email: "",
//         password: ""
//     })

//     toast.success("Signup Successfully");

//     setLoading(false);
//     navigate('/login')
// } catch (error) {
//     console.log(error);
//     setLoading(false);
// }

// }

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRole, setUserRole] = useState("user");

  const { app } = useContext(FireBaseContext);
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    console.log(app);
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // Add user detail to fire base
        
        const userRefrence = addDoc(collection(fireDB, "user"),{
            name: userName,
            email: userEmail,
            password: userPassword,
            role:"user"
        
        });
        console.log(userRefrence);
        
        

        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        
        // ..
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* {loading && <Loader/>} */}
      {/* Login Form  */}
      <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
        {/* Top Heading  */}
        <div className="mb-5">
          <p>{"errorMessage"}</p>
          <h2 className="text-center text-2xl font-bold text-pink-500 ">
            Signup
          </h2>
        </div>

        {/* Input One  */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Full Name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
          />
        </div>

        {/* Input Two  */}
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email Address"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
          />
        </div>

        {/* Input Three  */}
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
          />
        </div>

        {/* Signup Button  */}
        <div className="mb-5">
          <button
            type="button"
            onClick={signup}
            className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md "
          >
            Signup
          </button>
        </div>

        <div>
          <h2 className="text-black">
            Have an account{" "}
            <Link className=" text-pink-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;
