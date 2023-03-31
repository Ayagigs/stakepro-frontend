import React from "react";
// import NavbarUserDashboard from "../UserDashboardHorizontalNavbar";
// import logo from './assets/stakepro_log.svg';
// import percon_icon from '../assets/person.svg';
// import UserContentA from "../UserContentA";
// import UserContentB from "../UserContentB";
// import UserSidedeNavbar from "./UserSidedeNavbar";
// import UserDashboardFooterNav from "./UserDashboardFooterNav";
// import UserContentC from "./UserContentC";
import UserContentA from "./UserContentA";
import UserContentB from "./UserContentB";
import UserSidedeNavbar from "../UserSidedeNavbar";
import UserDashboardFooterNav from "../UserDashboardFooterNav";
import NavbarUserDashboard from "../UserDashboardHorizontalNavbar";

export default function UserAccountWallet1() {
    return (
        <div className="flex">
           
      
            {/* <UserSidedeNavbar/> */}
            <UserSidedeNavbar/>
           
       

        <div class="flex flex-col w-full">   
{/*       
            <NavbarUserDashboard/> */}
            <NavbarUserDashboard/>
            {/* <UserContentA/>
            <UserContentB/> */}
            <UserContentA/>
            <UserContentB/>
            
            {/* <UserDashboardFooterNav/> */}
            <UserDashboardFooterNav/>
        </div>
          
        </div>
       
    );
}