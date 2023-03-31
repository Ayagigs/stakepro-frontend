import React from 'react'

function UserContentA() {
  return (
    <div>
       <div class="flex flex-row m-5 mt-1 h-[92px] justify-evenly"> 
                {/* <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4"> */}
                <div class="flex flex-row space-x-5">
                    <div class="w-[162px] h-[91px] px-4 py-5 bg-[#E6FFFA] rounded-lg shadow">
                       
                        <div class="mt-0 text-3xl font-semibold text-gray-900">
                            $23,02
                        </div>
                        {/* <div class="text-sm font-medium text-gray-500 truncate">
                        Total Deposits
                        </div> */}
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
