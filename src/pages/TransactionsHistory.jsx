import React from 'react'
import { useNavigate } from "react-router-dom";


import HomeDashboardHorizontalNavbar from '../dashboard/HomeDashboardHorizontalNavbar';
import UserDashboardFooterNav from '../dashboard/UserDashboardFooterNav';
import UserContentA from '../dashboard/UserContentA';
import SideNavbar from '../dashboard/SideNavbar';
import DashboardSideNavbar from '../dashboard/DashboardSideNavbar';
import SideNavbarHistory from '../dashboard/SideNavbarHistory';


{/* <link rel="stylesheet" href="css/main.css" /> */}


function TransactionsHistory(props) {
  const navigate = useNavigate();

  return (
    <div>
     <SideNavbarHistory/>
    </div>
  )
}

export default TransactionsHistory