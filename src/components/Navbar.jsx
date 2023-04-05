import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/stakepro_log.svg';
import percon_icon from '../assets/person.svg';



//Motseki Start
// import logo from "./logo.svg";
// import "./App.css";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
// import { useState } from "react";
import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Stake from '../pages/Stake';

export default function Navbar() {
  const [show, setShow] = useState(false);

        const [open, setOpen] = React.useState(false);
        const [flyer, setFlyer] = React.useState(false);
        const [flyerTwo, setFlyerTwo] = React.useState(false);
        const [flyerThree, setFlyerThree] = React.useState(false);

        //Motseki Start
        const providerOptions = {
          binancechainwallet: {
            package: true,
          },
          walletconnect: {
            package: WalletConnect, // required
            options: {
              infuraId:  process.env.INFURA_ID// required
            }
          },
        
          coinbasewallet: {
            package: CoinbaseWalletSDK, // Required
            options: {
              appName: "Coinbase", // Required
              infuraId: process.env.INFURA_ID, // Required
              chainId: 4, //4 for Rinkeby, 1 for mainnet (default)
            },
          },
        };
      
        const web3Modal = new Web3Modal({
          network: "rinkeby",
          theme: "light", // optional, 'dark' / 'light',
          cacheProvider: false, // optional
          providerOptions, // required
        });
      
        const [connectedAccount, setConnectedAccount] = useState("");
      
        const connectWeb3Wallet = async () => {
          try {
            const web3Provider = await web3Modal.connect();
            const library = new ethers.providers.Web3Provider(web3Provider);
            const web3Accounts = await library.listAccounts();
            setConnectedAccount(web3Accounts[0]);
          } catch (error) {
            console.log(error);
          }
        };
      
        const disconnectWeb3Modal = async () => {
          await web3Modal.clearCachedProvider();
          setConnectedAccount("");
        };
      
       
  return (
    <div >

        <div className="relative bg-[#022738]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-900 py-6 md:justify-start md:space-x-10">
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
              {/* <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                Home
                </a> */}
                <Link to={"/"} 
                    className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Home
                  </Link> 

                {/* {show==true ?
                <Link to={"/landing"} 
                    className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Landing
                  </Link>  : ""} */}

              <Link to={"/about"}
                  className="text-base font-medium text-gray-500 hover:text-gray-900">
                      About
                    </Link>

                    <Link to={"/stake"}
                      className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Stake
                    </Link>
                    
                    <Link to={"/pricing"}
                      className="text-base font-medium text-gray-500 hover:text-gray-900">
                          Pricing
                    </Link>

                    <Link to={"/blogs"}
                      className="text-base font-medium text-gray-500 hover:text-gray-900">
                          Blogs
                    </Link>
               
                  <Link to={"/community"}
                      className="text-base font-medium text-gray-500 hover:text-gray-900">
                          Community
                    </Link>

                    <Link to={"/contact"}
                      className="text-base font-medium text-gray-500 hover:text-gray-900">
                          Contact
                    </Link>


              </nav>


              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

                  <div className="relative">
                     <button 
                      type="button"
                        className="group bg-[#FF6842] rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                       
                          // onClick={connectWeb3Wallet}
                      >
                                  
                        <Link to={"/login"}
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#FF6842] hover:bg-[#FF6842]"
                          >
                            Login with wallet
                                    
                    </Link>

                          
                     </button>   

                     {/* <button 
                      type="button"
                        className="group bg-[#FF6842] rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                       
                        onClick={connectWeb3Wallet}
                      >
                                
                          <Link to={"/stake"} 
                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#FF6842] hover:bg-[#FF6842]"
                              > 
                                 connect wallet        
                             
                             </Link>
                                     
                      </button>   */}


                      {/* {connectedAccount && <p>Connected to ${connectedAccount}</p>} */}
                      {/* {!connectedAccount ? (
                        <button
                        
                        type="button"
                        className="group bg-[#FF6842] rounded-md text-gray-500 inline-flex items-center 
                        text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                        w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#FF6842] hover:bg-[#FF6842] "
                      
                        onClick={connectWeb3Wallet}>Connect Wallet</button>
                      ) : (
                        <button
                        
                        type="button"
                        className="group bg-[#FF6842] rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                        w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#FF6842] hover:bg-[#FF6842]"
                       
                        onClick={disconnectWeb3Modal}>Disconnect</button>
                      )} */}

                    

                    </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
 }

