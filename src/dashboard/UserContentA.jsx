import React from 'react'

function UserContentA() {
  return (
    <div>
       <div class="flex flex-row m-1 mt-1 h-[92px] justify-evenly bg-[#FFFFFF] rounded-lg shadow"> 
                {/* <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4"> */}
                <div class="flex flex-row space-x-5">
                    <div class="flex flex-row space-x-4 w-[120px] h-[91px] px-4 py-5 bg-[#FFFFFF]
                    items-center justify-center">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z" fill="#B68900"/>
                    <path d="M20.4748 11.8628L12.3628 3.75L4.25 11.8628L12.3628 14.8598L20.4748 11.8628ZM6.773 11.175L12.2727 5.5515C12.2727 5.5515 17.6495 11.0513 17.876 11.1615C18.1033 11.271 14.1778 11.1615 14.1778 11.1615L12.3628 9.30525L10.5268 11.175H6.773ZM12.3628 15.4305L20.4748 12.4125L12.3628 19.9748L4.25 12.4538L12.3628 15.4313V15.4305Z" fill="white"/>
                    </svg>
                    
                        <div class="mt-0 text-[18px] font-semibold text-gray-900">
                            ETH
                        </div>
                    </div>

                    <div class="flex flex-row space-x-4 w-[130px] h-[91px] px-4 py-5 bg-[#FFFFFF]
                    items-center justify-center">
                    <div class="mt-0 text-[18px] font-semibold text-gray-900">
                            4.5%
                        </div>
                    </div>

                    <div class="flex flex-row space-x-4 w-[120px] h-[91px] px-4 py-5 bg-[#FFFFFF]
                    items-center justify-center">
                       
                        <div class="mt-0 text-[18px] font-semibold text-gray-900">
                            180 Days
                        </div>
                    </div>
                    <div class="flex flex-row space-x-4 w-[120px] h-[91px] px-4 py-5 bg-[#FFFFFF]
                    items-center justify-center">
                       
                        <div class="mt-0 text-[18px] font-semibold text-gray-900">
                        0.001 ETH
                        </div>
                    </div>
                 
                    <div class="w-[250px] h-[91px] px-0 py-5 bg-[#FFFFFF]">
                        <form>
                            <div class="flex">
                            
                                <div class="relative w-full">
                                    <input type="search" id="search-dropdown" class="block p-2.5 w-full z-0 text-[24px] text-[#BDBDBE] 
                                    bg-[#FFFFFF] rounded-r-lg border-[#BDBDBE] border-[#BDBDBE] border border-[#BDBDBE] focus:ring-blue-500 
                                    focus:border-blue-500 dark:bg-white dark:border-l-gray-700  dark:border-gray-600 
                                    dark:placeholder-[#FFFFFF] dark:text-white dark:focus:border-blue-500" 
                                    placeholder="Amount(ETH)" required/>
                                    <button type="submit" class="absolute top-0 right-0 p-2.5 text-[24px] 
                                    font-medium text-[#2BCF6C] bg-[#FFFFFF] border border-[#BDBDBE]
                                    hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Max
                                        <span class="sr-only">Amount(ETH)</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                   

            {/* <div class="flex flex-row"> */}
            <div class="flex flex-row  h-[91px] px-0 py-5 bg-[#FFFFFF]">
                    <button 
                     type="button" class="text-white bg-[#FF6842] 
                    from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 
                    focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                    font-medium rounded-lg text-sm px-10 py-2.5 text-center 
                    mr-2 mb-2">Stake</button>

                    <button type="button" class="text-white bg-[#07D4AF] from-cyan-500
                     to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                      focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg 
                      text-sm px-8 py-2.5 text-center mr-2 mb-2">Unstake</button>
                </div>

                </div>
            </div>


            <div class="flex flex-row m-1 mt-1 h-[92px] justify-evenly rounded-lg shadow"> 
                {/* <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4"> */}
                <div class="flex flex-row space-x-5 bg-[#FFFFFF]">
                <div class="flex flex-row space-x-5 w-[130px] h-[91px] px-5 py-5 bg-[#FFFFFF]
                    items-center justify-center">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z" fill="#B68900"/>
                    <path d="M20.4748 11.8628L12.3628 3.75L4.25 11.8628L12.3628 14.8598L20.4748 11.8628ZM6.773 11.175L12.2727 5.5515C12.2727 5.5515 17.6495 11.0513 17.876 11.1615C18.1033 11.271 14.1778 11.1615 14.1778 11.1615L12.3628 9.30525L10.5268 11.175H6.773ZM12.3628 15.4305L20.4748 12.4125L12.3628 19.9748L4.25 12.4538L12.3628 15.4313V15.4305Z" fill="white"/>
                    </svg>

                    <div class="mt-0 text-[18px] font-semibold text-gray-900">
                            ETH
                        </div>

                        
                    </div>
                    <div class="flex flex-row space-x-2 w-[130px] h-[91px] px-2 py-5 bg-[#FFFFFF]
                    items-center justify-center">
                            4.5%
                        </div>
                    <div class="flex flex-row space-x-2 w-[130px] h-[91px] px-2 py-5 bg-[#FFFFFF]
                    items-center justify-center">
                       
                        <div class="mt-0 text-[18px] font-semibold text-gray-900">
                            Locked
                        </div>
                    </div>
                    <div class="flex flex-row space-x-1 w-[130px] h-[91px] px-1 py-5 bg-[#FFFFFF]
                    items-center justify-center">
                       
                    <div class="mt-0 text-[18px] font-semibold text-gray-900">
                        0.001 ETH
                        </div>
                    </div>
                 
                    <div class="w-[250px] h-[91px] px-0 py-5 bg-[#FFFFFF]">
                        <form>
                            <div class="flex">
                            
                                <div class="relative w-full">
                                    <input type="search" id="search-dropdown" class="block p-2.5 w-full z-0 text-[24px] text-[#BDBDBE] 
                                    bg-[#FFFFFF] rounded-r-lg border-[#BDBDBE] border-[#BDBDBE] border border-[#BDBDBE] focus:ring-blue-500 
                                    focus:border-blue-500 dark:bg-white dark:border-l-gray-700  dark:border-gray-600 
                                    dark:placeholder-[#FFFFFF] dark:text-white dark:focus:border-blue-500" 
                                    placeholder="Amount(ETH)" required/>
                                    <button type="submit" class="absolute top-0 right-0 p-2.5 text-[24px] 
                                    font-medium text-[#2BCF6C] bg-[#FFFFFF] border border-[#BDBDBE]
                                    hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Max
                                        <span class="sr-only">Amount(ETH)</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                <div class="flex flex-row  h-[91px] px-0 py-5 bg-[#FFFFFF]">
                    <button 
                     type="button" class="text-white bg-[#FF6842] 
                    from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 
                    focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                    font-medium rounded-lg text-sm px-9 py-2.5 text-center 
                    mr-2 mb-2">Stake</button>

                    <button type="button" class="text-white bg-[#7C7C7C] from-cyan-500
                     to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                      focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg 
                      text-sm px-3 py-1 text-center mr-2 mb-2">23:14:06:28 LEFT</button>
                </div>

                </div>
            </div>

             <div class="flex flex-row m-1 mt-1 h-[92px] justify-evenly bg-[#FFFFFF] rounded-lg shadow"> 
                {/* <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4"> */}
                <div class="flex flex-row space-x-6">
                <div class="flex flex-row space-x-2 w-[130px] h-[91px] px-2 py-5 bg-[#FFFFFF]
                    items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0.185547C9.66322 0.185547 7.37895 0.878475 5.43601 2.17671C3.49307 3.47494 1.97873 5.32016 1.08449 7.47904C0.190254 9.63792 -0.0437191 12.0135 0.412159 14.3053C0.868037 16.5972 1.99329 18.7024 3.64563 20.3547C5.29796 22.0071 7.40316 23.1323 9.69502 23.5882C11.9869 24.0441 14.3624 23.8101 16.5213 22.9159C18.6802 22.0216 20.5254 20.5073 21.8237 18.5644C23.1219 16.6214 23.8148 14.3371 23.8148 12.0004C23.8193 10.4533 23.5191 8.92056 22.9312 7.48956C22.3434 6.05855 21.4794 4.75735 20.3887 3.66024C19.2979 2.56313 18.0018 1.6916 16.5742 1.09541C15.1467 0.49922 13.6157 0.190048 12.0686 0.185547H12ZM12.2002 12.4009L10.9701 16.549H17.5498C17.5934 16.5474 17.6368 16.5545 17.6777 16.5698C17.7185 16.5851 17.756 16.6082 17.7879 16.638C17.8197 16.6678 17.8454 16.7035 17.8635 16.7432C17.8816 16.7829 17.8916 16.8258 17.8931 16.8694V16.9781L17.3209 18.952C17.2957 19.0453 17.2395 19.1273 17.1615 19.1845C17.0835 19.2417 16.9884 19.2706 16.8918 19.2666H6.82205L8.50988 13.5166L6.62179 14.0887L7.0509 12.7728L8.93899 12.2006L11.3134 4.13336C11.3395 4.04054 11.396 3.95913 11.4737 3.9021C11.5515 3.84508 11.6461 3.81571 11.7425 3.81868H14.2886C14.3321 3.81715 14.3756 3.82423 14.4165 3.83951C14.4573 3.85479 14.4947 3.87797 14.5266 3.90772C14.5585 3.93748 14.5842 3.97323 14.6023 4.01293C14.6203 4.05263 14.6304 4.0955 14.6319 4.13908V4.24779L12.6293 11.0563L14.5174 10.4842L14.1169 11.8573L12.2002 12.4009Z" fill="#3E5C98"/>
                </svg>

                <div class="mt-0 text-[18px] font-semibold text-gray-900">
                            LTC
                        </div>
                    </div>

                    <div class="flex flex-row space-x-2 w-[130px] h-[91px] px-2 py-5 bg-[#FFFFFF]
                    items-center justify-center">
                            6.2%
                        </div>
                    <div class="flex flex-row space-x-2 w-[130px] h-[91px] px-2 py-5 bg-[#FFFFFF]
                    items-center justify-center">
                       
                        <div class="mt-0 text-[18px] font-semibold text-gray-900">
                            Locked
                        </div>
                    </div>
                    <div class="flex flex-row space-x-2 w-[130px] h-[91px] px-2 py-5 bg-[#FFFFFF]
                    items-center justify-center">
                       
                    <div class="mt-0 text-[18px] font-semibold text-gray-900">
                        0.001 LTC
                        </div>
                    </div>
                 
                   <div class="w-[250px] h-[91px] px-0 py-5 bg-[#FFFFFF]">
                        <form>
                            <div class="flex">
                            
                                <div class="relative w-full">
                                    <input type="search" id="search-dropdown" class="block p-2.5 w-full z-0 text-[24px] text-[#BDBDBE] 
                                    bg-[#FFFFFF] rounded-r-lg border-[#BDBDBE] border-[#BDBDBE] border border-[#BDBDBE] focus:ring-blue-500 
                                    focus:border-blue-500 dark:bg-white dark:border-l-gray-700  dark:border-gray-600 
                                    dark:placeholder-[#FFFFFF] dark:text-white dark:focus:border-blue-500" 
                                    placeholder="Amount(ETH)" required/>
                                    <button type="submit" class="absolute top-0 right-0 p-2.5 text-[24px] 
                                    font-medium text-[#2BCF6C] bg-[#FFFFFF] border border-[#BDBDBE]
                                    hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                                    dark:bg-blue-600  dark:focus:ring-blue-800">
                                        Max
                                        <span class="sr-only">Amount(ETH)</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* <div class="flex flex-row w-[162px] h-[91px] px-0 py-5 bg-[#FFFFFF]">
                        <div class="w-[158px] h-[42px] px-4 py-5 bg-[#FFECE7] rounded-lg shadow">
                            <div class="text-[18px] font-medium text-[#E85631] truncate">
                                Coming Soon!
                            </div>
                        </div>

                        </div> */}

                    <div class="flex flex-row  h-[91px] px-0 py-5 bg-[#FFFFFF]">
                        <button 
                        type="button" class="text-white bg-[#7C7C7C] 
                        from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 
                        focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                        font-medium rounded-lg text-sm px-10 py-2.5 text-center 
                        mr-2 mb-2">Coming Soon!</button>

                    </div>
                   
                </div>
            </div>
    </div>
  )
}

export default UserContentA