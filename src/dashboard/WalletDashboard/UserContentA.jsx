import React from 'react'

function UserContentA() {
  return (
    <div>

    {/* <div className='flex flex-col'> */}
        <div className='flex flex-col p-6 ml-6 w-[749px] h-[189px] bg-[black] 
        rounded-[10px] text-start pt-10'>
        <div class="flex flex-row">
        <h1 className='text-[#FF6842] text-[32px]'>Balance</h1>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.42 13.9799 8.42 11.9999C8.42 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z" stroke="#FF6842" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 20.2697C15.53 20.2697 18.82 18.1897 21.11 14.5897C22.01 13.1797 22.01 10.8097 21.11 9.39973C18.82 5.79973 15.53 3.71973 12 3.71973C8.47 3.71973 5.18 5.79973 2.89 9.39973C1.99 10.8097 1.99 13.1797 2.89 14.5897C5.18 18.1897 8.47 20.2697 12 20.2697Z" stroke="#FF6842" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>

        <div class="flex flex-row justify-between">
        <h1 className='text-white text-[32px]'>$1,037.893.46</h1>
        <button class='bg-[#FF6842] text-white w-[115px] h-[42px]'>
            1 of 7 Wallets
        </button>
        </div>

        </div>

       
        {/* </div> */}
       <div class="flex ml-5 mt-1 w-[712px] h-[92px] justify-evenly"> 
                {/* <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4"> */}
                <div class="flex flex-row space-x-5">
                    <div class="w-[162px] h-[91px] px-4 py-5 bg-[#E6FFFA] rounded-lg shadow">
                       
                        <div class="mt-0 text-3xl font-semibold text-gray-900">
                            $23,02
                        </div>
                        <div class="text-sm font-medium text-gray-500 truncate">
                        Total Deposits
                        </div>
                    </div>
                    <div class="w-[162px] h-[91px] px-4 py-5 bg-[#FFDCD3] rounded-lg shadow">
                       
                        <div class="mt-1 text-3xl font-semibold text-gray-900">
                            $23,02
                        </div>
                        <div class="text-sm font-medium text-gray-500 truncate">
                        Total Withdrawn
                        </div>
                    </div>
                    <div class="w-[162px] h-[91px] px-4 py-5 bg-[#E2F5FF] rounded-lg shadow">
                       
                        <div class="mt-1 text-3xl font-semibold text-gray-900">
                            $23,02
                        </div>
                        <div class="text-sm font-medium text-gray-500 truncate">
                        Total Transferred
                        </div>
                    </div>


                    <div class="flex flex-col">
                    <div class="w-[158px] h-[42px] px-4 py-5 bg-[#FFECE7] rounded-lg shadow">
                        <div class="text-sm font-medium text-[#E85631] truncate">
                             Withdraw
                        </div>
                    </div>


                    <div class="w-[158px] h-[42px]  px-4 py-5 bg-white rounded-lg shadow">
                        <div class="text-sm font-medium text-[#E85631] truncate">
                            Transfer
                        </div>
                    </div>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default UserContentA
