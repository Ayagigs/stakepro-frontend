import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

export default function VerifyAccTwo() {
  return (
    <div className=' h-[100vh] w-[100%] flex items-center justify-center'>
      <div className='h-[541px] w-[486px] bg-white rounded-[20px] flex items-center justify-center flex-col shadow-xl'>
        <div className=' w-max mb-[100px]'>
            <h1 className='text-2xl font-normal text-[#022738] '>Verify your Account</h1>
        </div>
        <div className='relative mt-4 text-left flex items-center justify-center flex-col'>
            <label htmlFor="" className='mr-[180px] mb-[5px]'>What is your data of birth?</label>
            <input className='w-[371px] h-[56px] rounded-md hover:outline-none focus:outline-red-400 focus:ring-1 focus:ring-red-400' type="date" />
        </div>
        <button className='h-[56px] w-[371px]  bg-[#FF6842] rounded-md text-[white] text-[20px] mt-[35px]'>Next</button>
      </div>
    </div>
  )
}
