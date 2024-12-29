import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import auth from '../../config/firebase'
import { signOut } from 'firebase/auth'
function Navbar() {
    const navigate = useNavigate()
    const [log,setLog] = useState(false)

    useEffect(()=>{
          auth.onAuthStateChanged(function(user){
            if(user){
              console.log("user logged in")
              setLog(true)
            }
            else{
              console.log("user logged out")
              setLog(false)
            }
          })
    },[])

    function logout(){
      signOut(auth)
    }
    
  return (
    <div className='py-5 flex flex-col md:flex-row justify-between items-center'>
        <h2 className='text-2xl md:text-3xl font-bold hidden md:block text-[#AC3B61]'>B L O G <span className='text-[#123C69]'>W H I Z </span> </h2>
        <div className='flex items-center '>
            <Link className='list-none px-5 hover:cursor-pointer font-medium  hover:text-[#AC3B61]' to={"/home"}>Home</Link>
            <Link className='list-none px-5 hover:cursor-pointer font-medium hover:text-[#AC3B61]' to={"/blogs"}>Blogs</Link>
            <Link className='list-none px-5 hover:cursor-pointer font-medium hover:text-[#AC3B61]'>About</Link>

            {
              log? <button className='button-style ' onClick={logout}>LogOut</button>: <button className='button-style ' onClick={()=>navigate("/login")}>Login</button>
            }
           
            
        </div>
    </div>
  )
}

export default Navbar