import React from "react";
import NavbarUserDashboard from "../UserDashboardHorizontalNavbar";
// import logo from '../assets/stakepro_log.svg';
// import percon_icon from '../assets/person.svg';
import UserContentA from "../WalletDashboard/UserContentA";
import UserContentB from "../WalletDashboard/UserContentB";
// import UserContentC from "../WalletDashboard/UserContentC";
// import UserContentB from "../UserContentB";
import UserSidedeNavbar from "../UserSidedeNavbar";
import UserDashboardFooterNav from "../UserDashboardFooterNav";
// import UserContentC from "../UserContentC";
import { Chart } from "chart.js";
import BarChart from "../BarChart";
import UserHomeContentA from "./UserHomeContentA";
import ApexChartHome from "./HomeChart";
import HomeChart from "./HomeChart";
import HomeDashboardHorizontalNavbar from "./HomeDashboardHorizontalNavbar";
// import UserContentA from "./UserHomeContentA";

export default function UserDashboardHome() {
    return (
        <div className="flex">
            <UserSidedeNavbar/> 
           
        <div class="flex flex-col w-full">   
      
            <NavbarUserDashboard/> 
            <UserHomeContentA/>
            <HomeDashboardHorizontalNavbar/> 
            <HomeChart/>
            <UserDashboardFooterNav/> 
        </div>
          
        </div>
       
    );
}