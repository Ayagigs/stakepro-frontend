import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'

import HomeDashboardHorizontalNavbar from '../dashboard/HomeDashboardHorizontalNavbar';
import UserDashboardFooterNav from '../dashboard/UserDashboardFooterNav';
import UserContentA from '../dashboard/UserContentA';
import SideNavbar from '../dashboard/SideNavbar';
import DashboardSideNavbar from '../dashboard/DashboardSideNavbar';


{/* <link rel="stylesheet" href="css/main.css" /> */}


function Stake(props) {
  const navigate = useNavigate();

  return (
    <div>
      <SideNavbar/> 
    </div>
  )
}

export default Stake