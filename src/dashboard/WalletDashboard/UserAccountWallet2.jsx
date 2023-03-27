import React from 'react'
import NavbarUserDashboard from "../UserDashboardHorizontalNavbar";
import logo from '../assets/stakepro_log.svg';
import percon_icon from '../assets/person.svg';
import UserContentA from "./UserContentA";
import UserContentB from "./UserContentB";
import UserSidedeNavbar from "../UserSidedeNavbar";
import UserDashboardFooterNav from "../UserDashboardFooterNav";
import UserContentC from "../UserContentC";
import DashboardWalletNavbar from '../HomeDashboard/DashboardWalletNavbar';
import { ChartBar } from 'tabler-icons-react';

function UserAccountWallet2() {
  return (
    <div className="flex">
           
      
            <UserSidedeNavbar/>
           
       

        <div class="flex flex-col w-full">   
      
            <NavbarUserDashboard/>
            <DashboardWalletNavbar/>
            <ChartBar/>
            
            <UserDashboardFooterNav/>
        </div>
          
        </div>
  )
}

export default DashboardWallet
