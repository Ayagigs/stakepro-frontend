import { useState } from "react";

export default function HomeDashboardHorizontalNavbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="flex flex-row w-full h-[37px] m-5  justify-start items-start bg-[#022738] shadow">
            {/* <div className="justify-between px-0 mx-auto lg:max-w-full md:items-center md:flex md:px-0">  */}
            {/* <div className="justify-between px-0 mx-auto lg:max-w-full md:items-center md:flex md:px-0 items-center mt-1">  */}
                 <div className="justify-between px-0 mx-[5px] lg:max-w-full md:items-center md:flex md:px-0 items-center mt-1"> 
                    {/* <div className="flex items-start justify-between py-1 md:py-1 md:block"> */}
                       
                    <ul className="items-start justify-start space-y-8 md:flex md:space-x-20 md:space-y-0">
                            <li className="text-white hover:text-[#31FFD9]">
                                <a href="#" >Token</a>
                            </li>
                            <li className="text-white hover:text-[#31FFD9]">
                                <a href="#" >Est. APR</a>
                            </li>
                            <li className="text-white hover:text-[#31FFD9]">
                                <a href="#" >Staking  Duration</a>
                            </li>
                            <li className="text-white hover:text-[#31FFD9]">
                                <a href="#" >Minimum Stake</a>
                            </li>
                            <li className="text-white hover:text-[#31FFD9]">
                                <a href="#" >Stake Amount</a>
                            </li>
                        </ul>
                    {/* </div> */}
                {/* </div> */}
            </div>

        </nav>
    );
}