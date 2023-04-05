import React from 'react'
import { useNavigate } from "react-router-dom";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import NavbarUserDashboard from '../dashboard/UserDashboardHorizontalNavbar';
import UserHomeContentA from '../dashboard/HomeDashboard/UserHomeContentA';
import HomeDashboardHorizontalNavbar from '../dashboard/HomeDashboard/HomeDashboardHorizontalNavbar';
import UserDashboardFooterNav from '../dashboard/UserDashboardFooterNav';
import UserContentB from '../dashboard/WalletDashboard/UserContentB';
import UserContentA from '../dashboard/WalletDashboard/UserContentA';

{/* <link rel="stylesheet" href="css/main.css" /> */}


function StakeHistory(props) {
  const navigate = useNavigate();

  return (
    <div>
     <Navbar/>

    
           
        <div class="flex flex-col w-full">   
      
          
      
    <div class="flex flex-row min-h-[250px] justify-end items-center 
    bg-black bg-no-repeat bg-cover bg-[url('/img/stake_dashboard.svg')] first-letter first-letter m-5">
         <div class="flex flex-row m-5 mt-1 h-[92px] justify-evenly"> 
                {/* <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4"> */}
                <div class="flex flex-row space-x-5">
                    
                    <div class="w-[200px] h-[150px] px-0 py-5 ">
                        <div class="text-[20px] font-medium text-[#31FFD9] truncate">
                         Wallet Balance
                        </div>
                        <div class='flex felx-row'>
                        <div class="mt-1 text-[48px] font-semibold text-white">
                            17.425
                        </div>
                        <div class="mt-1 text-[20px] font-semibold text-[#FFFFFF]">
                         ETH
                        </div>
                        </div>
                    </div>

                    <div class="w-[200px] h-[150px] px-4 py-5 ">
                        <div class="text-[20px] font-medium text-[#31FFD9] truncate">
                         Current Stake
                        </div>
                        <div class='flex felx-row'>
                        <div class="mt-1 text-[48px] font-semibold text-white">
                            8.233
                        </div>
                        <div class="mt-1 text-[20px] font-semibold text-[#FFFFFF]">
                         ETH
                        </div>
                        </div>
                    </div>

                    <div class="w-[200px] h-[150px] px-4 py-5 ">
                        <div class="text-[20px] font-medium text-[#31FFD9] truncate">
                         Current Rewards
                        </div>
                        <div class='flex felx-row'>
                        <div class="mt-1 text-[48px] font-semibold text-white">
                            0.814
                        </div>
                        <div class="mt-1 text-[20px] font-semibold text-[#FFFFFF]">
                         ETH
                        </div>
                        </div>
                    </div>

                    <div class="w-[200px] h-[150px] px-4 py-5 ">
                        <div class="text-[20px] font-medium text-[#31FFD9] truncate">
                          Lifetime Rewards
                        </div>
                        <div class='flex felx-row'>
                        <div class="mt-1 text-[48px] font-semibold text-white">
                            3.142
                        </div>
                        <div class="mt-1 text-[20px] font-semibold text-[#FFFFFF]">
                         ETH
                        </div>
                        </div>
                    </div>

                </div>
            </div>
    </div>
       
        
            <HomeDashboardHorizontalNavbar/>
            <UserContentA/>
            <UserDashboardFooterNav/>
        </div>
          
     
    

  {/* <Footer/> */}



    </div>
  )
}

export default StakeHistory
