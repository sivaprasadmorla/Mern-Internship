import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='flex justify-around items-center w-screen h-[50px] bg-[#000000] text-[#ffffff]'>
      <div className="logo w-[20%]">
        <h1>Logo</h1>
      </div>
      <div className="navlink w-[30%]">
        <a href="#">Home</a>
        <a href="#">EmployeeList</a>
      </div>
      <div className="userlink flex justify-around w-[25%]">
        <h3>UserName</h3>
        <button className='bg-[#ff0000] px-[15px] rounded-md'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
