import { useState } from "react";

export default function HomeDashboardHorizontalNavbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-[743px] h-[37px] m-5 justify-center items-center bg-[#022738] shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-1 md:py-1 md:block">
                       
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-[#31FFD9]">
                                <a href="javascript:void(0)">Performance</a>
                            </li>
                            <li className="text-white hover:text-[#31FFD9]">
                                <a href="javascript:void(0)">Transactions</a>
                            </li>
                            {/* <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">About US</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">Contact US</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                
            <div className="hidden space-x-2 md:inline-block">
                    
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-[#31FFD9]">
                                <a href="javascript:void(0)">All</a>
                            </li>
                            <li className="text-white hover:text-[#31FFD9]">
                                <a href="javascript:void(0)">24hr</a>
                            </li>
                            <li className="text-white hover:text-[#31FFD9]">
                                <a href="javascript:void(0)">1day</a>
                            </li>
                            <li className="text-white hover:text-[#31FFD9]">
                                <a href="javascript:void(0)">1w</a>
                            </li>
                            <li className="text-white hover:text-[#31FFD9]">
                                <a href="javascript:void(0)">1m</a>
                            </li>
                            <li className="text-white hover:text-[#31FFD9]">
                                <a href="javascript:void(0)">1y</a>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
    );
}