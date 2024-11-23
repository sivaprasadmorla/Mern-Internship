import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-around items-center w-screen h-[50px] bg-[#000000] text-[#ffffff]'>
      <div className="logo w-[20%]">
        <h1>Logo</h1>
      </div>
      <div className="navlink w-[30%]">
        <Link to="/home">Home</Link>
        <Link to="/employeelist">EmployeeList</Link>

      </div>
      <div className="userlink flex justify-around w-[25%]">
        <h3>UserName</h3>
        <Link to="/">
        
        <button className='bg-[#ff0000] px-[15px] rounded-md'>Logout</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
