import React from "react";
import HomeDashboardHorizontalNavbar from "./HomeDashboardHorizontalNavbar";
import UserContentA from "./UserContentA";
import UserDashboardFooterNav from "./UserDashboardFooterNav";
import DashboardSideNavbar from "./DashboardSideNavbar";
import DashboardTopNavbar from "./DashboardTopNavbar";

export default function SideNavbar() {
    return (
        <div className="flex">
        <DashboardSideNavbar/>

<div className=" mx-auto mt-0">
          
<div class="flex flex-col w-full">  

<DashboardTopNavbar/>
      
      <div class="flex flex-row min-h-[205px] justify-end items-center 
      bg-black bg-no-repeat bg-cover bg-[url('/img/stake_dashboard.svg')]  m-1">
           <div class="flex flex-row m-5 mt-0 h-[92px] justify-evenly"> 
                  {/* <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4"> */}
                  <div class="flex flex-row space-x-5">
                      
                      <div class="w-[200px] h-[150px] px-4 py-5 ">
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
           
            </div>
        </div>
    );
}