import React from 'react'

function UserHomeContentA() {
  return (
    <div>

    {/* <div className='flex flex-col'> */}
        <div className='flex flex-col p-5 ml-6 w-full h-[189px] bg-[black] 
        rounded-[10px] text-start pt-0'>
        <div class="flex flex-row">
        <h1 className='w-[467px] text-white text-[28px]'>Upgrade to Premium and Get Unlimited Access to all offers and Rewards</h1>
        </div>

        <div class="flex flex-row justify-between">
        {/* <h1 className='text-white text-[32px]'>$1,037.893.46</h1> */}
        <button class='bg-[#FF6842] text-white w-[115px] h-[42px] rounded-[6px] mt-2'>
            Upgrade Now
        </button>
        </div>

        </div>

       
      
<div class="flex ml-7 mt-10 mb-10 w-[750px] h-[92px] text-center justify-evenly"> 
    <div class="flex flex-row space-x-5">

         <div class="flex flex-col items-center  w-[244px] h-[120px]  px-4 py-5 bg-[#FFFFFF] rounded-lg shadow"> 
            <img src="img/homedashboardImg.svg" class="w-16 -mt-14 " alt="" />
            <div class="mt-0 text-3xl font-semibold text-gray-900">
                            $23,02
                        </div>
                        <div class="text-sm font-medium text-gray-500 truncate">
                        Total Assets
                        </div>
          </div>

          <div class="flex flex-col items-center  w-[244px] h-[120px]  px-4 py-5 bg-[#FFFFFF] rounded-lg shadow"> 
            <img src="img/homedashboardImg2.svg" class="w-16 -mt-14" alt="" />
            <div class="mt-0 text-3xl font-semibold text-gray-900">
                        $18,354
                        </div>
                        <div class="text-sm font-medium text-gray-500 truncate">
                        Total Rewards
                        </div>
          </div>

          <div class="flex flex-col items-center  w-[244px] h-[120px] px-4 py-5 bg-[#FFFFFF] rounded-lg shadow"> 
            <img src="img/homedashboardImg3.svg" class="w-16 -mt-14" alt="" />
            <div class="mt-0 text-3xl font-semibold text-gray-900">
                    $18,354
                    </div>
                <div class="text-sm font-medium text-gray-500 truncate">
                    Total Stakes
            </div>
          </div>
        </div>
    </div>

    </div>
  )
}

export default UserHomeContentA
