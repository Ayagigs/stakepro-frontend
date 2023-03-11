import React from 'react'


export default function VerifyAccThree() {
  return (
    
    <div className=' h-[100vh] w-[100%] flex items-center justify-center'>
      <div className='h-[541px] w-[486px]  rounded-[20px] flex items-center justify-center flex-col shadow-xl'>
        <div className=' w-max mb-[50px]'>
            <h1 className='text-2xl font-normal text-[#022738] '>Verify your Account</h1>
        </div>
        <div className='h-max w-[100%] flex items-center justify-evenly flex-row '>
            <div className='h-[100px] w-[100%] flex items-center justify-center flex-col '>
                <label htmlFor="" className='mr-[140px] mb-[8px] text-[#3A3A3B]'>City</label>
                <input placeholder='enter city' type="text" className='w-[180px] h-[56px] border rounded-md pl-2.5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-red-400'/>
            </div>
            <div className='h-[100px] w-[100%] flex items-center justify-center flex-col'>
                <label htmlFor="" className='mr-[80px] mb-[8px] text-[#3A3A3B]'>Postal Code</label>
                <input placeholder='enter code' className='h-[56px] border w-[180px] rounded-md pl-2.5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-red-400' type="text" />
            </div>
        </div>
        <div className='flex items-center justify-center flex-col '>
            <label htmlFor="" className='pr-[120px] pt-[20px] pb-[10px]'>what is your primary home address</label>
            <input placeholder='Message...' type="text" className='border h-[100px] w-[380px] rounded-md pb-[45px] pl-[10px] text-[#9C9C9D] hover:outline-none focus:outline-none focus:ring-1 focus:ring-red-400'/>
            <a href="/verify4" className='h-[56px] w-[371px] bg-[#FF6842] text-center flex items-center justify-center rounded-md text-[white] text-[20px] mt-[40px] mb-[20px]'>Next</a>
        </div>
      </div>
    </div>
  )
}
