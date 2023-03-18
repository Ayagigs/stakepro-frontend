import React from 'react'


export default function VerifyAccOne() {
  return (
    <div className=' h-[100vh] w-[100%] flex items-center justify-center '>
      <div className='h-[541px] w-[486px] bg-white rounded-[20px] flex items-center justify-center flex-col shadow-xl'>
        <div className='bg-red-400 h-[131px] w-[131px] rounded-full'>
          <img src="/src/img/Ellipse 188.png" alt="" />
        </div>
        <div className='mt-[10px]'>
            <h1 className='text-[32px] font-normal text-[#022738]'>Verify your Account</h1>
        </div>
        <div className='w-[320px] h-max text-center mt-[5px]'>
            <p className=' text-[16px] font-normal text-[#7C7C7C]'>Now we’ll ask you for information such as  
            Date of birth and ID to verify your identity.</p>
        </div>
        <a href="/verify2" className='h-[56px] w-[280px] bg-[#FF6842] text-center flex items-center justify-center rounded-md text-[white] text-[20px] mt-[80px]'>Next</a>
      </div>
    </div>
  )
}
