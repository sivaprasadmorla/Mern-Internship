import React from 'react'

const EmployeeList = () => {
  return (
    <div>
      <h1 className='bg-[#ffff00]'>EmployeeList!!</h1>
      <div className=' w-[95%] m-1 flex justify-end items-center gap-5'>
        <h4>Count: 0</h4>
        <button className='bg-[#228b3c] px-2 py-[4px] text-sm rounded-md' >Create Employee</button>
      </div>
    </div>
  )
}

export default EmployeeList
