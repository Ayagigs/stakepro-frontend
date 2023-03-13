import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export default function VerifyAccFour() {
  return (
    <div className=' h-[100vh] w-[100%] flex items-center justify-center'>
    <div className='h-[541px] w-[486px]  rounded-[20px] flex items-center justify-center flex-col shadow-xl'>
      <div className=' w-max mb-[50px]'>
          <h1 className='text-2xl font-normal text-[#022738] '>Verify your Account</h1>
      </div>
      <div className=' w-[350px] mr-[50px] '>
        <h1 className='font-normal text-xl mb-[10px]'>Verify your identity  with a photo ID</h1>
        <p className='text-base text-[#5B5B5C]'>We need a goverment Issued  photo ID to confirm your identity</p>
      </div>
      <div className=' h-[200px] w-[100%] flex items-center justify-between flex-col'>
        <a href="/" className='  h-[60px] w-[85%] flex items-center justify-between border-b border-[#7C7C7C]'>
          <h1 className='ml-[10px]'>National ID</h1>
          <IoIosArrowForward size="25" className='text-[#7C7C7C]'/>
        </a>
        <a href='/verify2' className=' h-[60px] w-[85%] flex items-center justify-between border-b border-[#7C7C7C]'>
          <h1 className='ml-[10px]'>Passport</h1>
          <IoIosArrowForward size="25" className='text-[#7C7C7C]'/>
        </a>
        <a href='/verify3' className=' h-[60px] w-[85%] flex items-center justify-between border-b border-[#7C7C7C]'>
          <h1 className='ml-[10px]'>Driver’s License</h1>
          <IoIosArrowForward size="25" className='text-[#7C7C7C]'/>
          
        </a>
      </div>
    </div>
  </div>
  )
}
