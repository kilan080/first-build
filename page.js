"use client"
// import Image from "next/image";
import { useEffect } from "react";
import  { useState } from "react"
import { CiLogin } from "react-icons/ci";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const [isLongEnough, setIsLongEnough] = useState(false);
  const [isLongEnoug, setIsLongEnoug] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasUpperCas, setHasUpperCas] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  
  
  const validatePassword = (pwd) => {
    setIsLongEnough(pwd.length > 8);
    setHasNumber(/\d/.test(pwd));
    setHasUpperCas( /[A-Z]/.test(pwd));
    
  }

  const validateUsername = (name) => {
    setIsLongEnoug(name.length > 8);
    setHasUpperCase(/[A-Z]/.test(name));
    

  }
  const LoginPage = () => {
    setIsLoggedIn(false);
    localStorage.setItem("login", 'false');
  };
  
  const ProfilePage = () => {
    setIsLoggedIn(true)
    localStorage.setItem("login", "true");
  };


  useEffect(() => { 
  const data = localStorage.getItem("login");
  if (data === 'false') {
    setIsLoggedIn(false)
  }
  }, [])
  return (

    <div className="flex justify-center text-grey-600">
      {isLoggedIn ? (
        <div className="">
          <h1 className="text-3xl pt-3 pb-4 text-center text-gray-400">Login Page</h1>
          {
            <div className=" flex flex-col items-center">
              <form action="" className="flex flex-col items-center">
                <label htmlFor="" className="text-gray-800 font-bold mt-12 uppercase">Username:</label>
                <input type="text" placeholder="Enter username" value={Username} onChange={(e) => {
                  setUsername(e.target.value);
                  validateUsername(e.target.value);
                }} className="w-45 bg-gray-400 justify-center"></input>
                <div className="mt-2 flex gap-1.5">
                  <input type="checkbox" checked={isLongEnoug}  disabled/>
                  <input type="checkbox" checked={hasUpperCase} disabled />
                </div>
                <label htmlFor="" className="text-gray-800 font-bold uppercase mt-2">Password:</label>
                <input type="text" placeholder="Enter password" value={Password} onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword(e.target.value);
                }}  className="w-45 bg-gray-400 justify-center"></input>
                <div className="flex gap-2 px-1.5">
                  <input type="checkbox" checked={isLongEnough} className="mt-2"/>
                  <input type="checkbox" checked={hasNumber} className="mt-2"/>
                  <input type="checkbox" checked={hasUpperCas} className="mt-2"/>
                </div>
              </form>
              <button  className=" flex flex-row items-center justify-center gap-1 bg-blue-500 text-white font-bold py-3 px-4 rounded hover:bg-blue-700 max-w-100% text-center mt-4" onClick={LoginPage}> <CiLogin size={30} /> Submit</button>
            </div>
          }

        </div> 
       
      ) : (
          <div className=" flex flex-col  justify-center text-center">
            <h1 className="text-3xl pt-4">Profile Page</h1>
            <img className="object-cover object-center rounded-full h-72 w-60" src='/public/profImage.webp' alt="Profile image" />
            <h2 className="text-2xl pt-3">Name: Kilani Olamilekan</h2>
            <h2 className="text-2xl pt-3">Username : @Olamie03</h2>
            <p className="text-3xl pt-3">Web Developer</p>
            <h2 className="text-2xl pt-3 pb-3">Phone Number: 090-695-829-40</h2>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 max-w-100%" onClick={ProfilePage}>LOG OUT</button>
          </div>
      )
    }
    </div>
  );
}
  