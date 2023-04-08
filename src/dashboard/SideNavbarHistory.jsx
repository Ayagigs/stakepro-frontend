import React from "react";
import HomeDashboardHorizontalNavbar from "./HomeDashboardHorizontalNavbar";
import UserContentA from "./UserContentA";
import UserDashboardFooterNav from "./UserDashboardFooterNav";
import DashboardSideNavbar from "./DashboardSideNavbar";
import DashboardTopNavbar from "./DashboardTopNavbar";
import UserContentB from "./UserContentB";

export default function SideNavbarHistory() {
    return (
        <div className="flex flex-col">
            <UserContentB/>           
            <UserDashboardFooterNav/> 
        </div>
    );
}