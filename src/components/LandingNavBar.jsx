import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/stakepro_log1.svg';

export default function LandingNavBar() {
  const [show, setShow] = useState(false);

        const [open, setOpen] = React.useState(false);
        const [flyer, setFlyer] = React.useState(false);
        const [flyerTwo, setFlyerTwo] = React.useState(false);
        const [flyerThree, setFlyerThree] = React.useState(false);



        const [walletAddress, setWalletAddress] = useState("");

        useEffect(() => {
          getCurrentWalletConnected();
          addWalletListener();
        }, [walletAddress]);
      
        const connectWallet = async () => {
          if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
              /* MetaMask is installed */
              const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
              });
              setWalletAddress(accounts[0]);
              console.log(accounts[0]);
            } catch (err) {
              console.error(err.message);
            }
          } else {
            /* MetaMask is not installed */
            console.log("Please install MetaMask");
          }
        };
      
        const getCurrentWalletConnected = async () => {
          if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
              const accounts = await window.ethereum.request({
                method: "eth_accounts",
              });
              if (accounts.length > 0) {
                setWalletAddress(accounts[0]);
                console.log(accounts[0]);
              } else {
                console.log("Connect to MetaMask using the Connect button");
              }
            } catch (err) {
              console.error(err.message);
            }
          } else {
            /* MetaMask is not installed */
            console.log("Please install MetaMask");
          }
        };
      
        const addWalletListener = async () => {
          if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            window.ethereum.on("accountsChanged", (accounts) => {
              setWalletAddress(accounts[0]);
              console.log(accounts[0]);
            });
          } else {
            /* MetaMask is not installed */
            setWalletAddress("");
            console.log("Please install MetaMask");
          }
        };
      

  return (
    <div >
        <div className="relative bg-[#F3FFFD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-[#F3FFFD] py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src={logo} alt='logo'
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <nav className="hidden md:flex space-x-10">

                    {show==true ?
                <Link to={"/landing"} 
                    className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Landing
                  </Link>  : ""}

                  <Link to={"/home"} 
                    className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Home
                  </Link> 

                  <Link to={"/about"}
                    className="text-base font-medium text-gray-500 hover:text-gray-900">
                      About
                  </Link>

                  <Link to={"/about"}
                    className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Stake
                  </Link>

                <Link to={"/pricing"}
                    className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Pricing
                  </Link>

                <div className="relative">
                
               
                  <div
                    onMouseLeave={() => setFlyerTwo(false)}
                    className={
                      flyerTwo
                        ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    }
                  >
                   
                  </div>
                </div>

                {/* <a
                  href="#"
                  className="text-base font-medium text-[#02332A] hover:text-gray-900"
                >
                    Blogs
                </a> */}

                  <Link to={"/blogs"}
                    className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Blogs
                  </Link>

                {/* <a
                  href="#"
                  className="text-base font-medium text-[#02332A] hover:text-gray-900"
                >
                  Contact
                </a> */}

                  <Link to={"/contact"}
                    className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Contact
                  </Link>
              </nav>

              {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <div className="relative">
                  <button
                    type="button"
                    className="group bg-[#FFECE7] rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => (setFlyerThree(!flyerThree), setFlyer(false))}
                  >
                   
                
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-[#FF6842] bg-[#FFECE7] hover:bg-[#FFECE7]"
                  >
                    Sign up
                  </a> 
                  </button>
            
                </div>
              </div> */}






<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

<div className="relative">
    {/* <button 
    type="button"
      className="group bg-[#FF6842] rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={() => (setFlyerThree(!flyerThree), setFlyer(false))}
    >
                
              <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#FF6842] hover:bg-[#FF6842]"
                  >
                      Connect Wallet
                   
                    </a>
                 
    </button> */}

<button 
                      type="button"
                        className="group bg-[#FF6842] rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                       
                        onClick={connectWallet}
                      >
                                  
                        <a
                          href="#"
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#FF6842] hover:bg-[#FF6842]"
                          >
                                       
                            <span className="is-link has-text-weight-bold">
                            {walletAddress && walletAddress.length > 0
                              ? `Connected: ${walletAddress.substring(
                                  0,
                                  6
                              )}...${walletAddress.substring(38)}`
                              : "Connect Wallet"}
                            </span>
                                    
                          </a>
                      </button>
 
  </div>
</div>


            </div>
          </div>
        </div>
    </div>
  )
 }

