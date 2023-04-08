import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/stakepro_log.svg';
import percon_icon from '../assets/person.svg';
import './nav.css';



//Motseki Start
// import logo from "./logo.svg";
// import "./App.css";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
// import { useState } from "react";
import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Stake from '../pages/Stake';

function NavbarResponsive() {

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
    <div>
{/* 
<nav class="nav flex flex-wrap items-center justify-between px-4"> */}

<nav class="nav flex flex-wrap items-center justify-between px-5 py-5 bg-[#022738] text-white border-b-2 border-gray-900">
  <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
     <img
        className="h-8 w-auto sm:h-10"
         src={logo} alt='logo'
        />
  </div>

  <input class="menu-btn hidden" type="checkbox" id="menu-btn"/>
  <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
    <span class="navicon bg-grey-darkest flex items-center relative"></span>
  </label>

  {/* <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto"> */}
  <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
    <li class="border-t md:border-none">
        <Link to={"/"} 
          class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-normal">
            Home
        </Link>             
    </li>

    
    <li class="border-t md:border-none">
        <Link to={"/about"}
            class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
        About
        </Link>
    </li>
    
    <li class="border-t md:border-none">
        <Link to={"/stake"}
            class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
                Stake
        </Link>
    </li>

    <li class="border-t md:border-none">

        <Link to={"/pricing"}
            class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
                Pricing
        </Link>
    </li>

    <li class="border-t md:border-none">
        <Link to={"/blogs"}
            class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
                Blogs
        </Link>
    </li>

    <li class="border-t md:border-none">
        <Link to={"/community"}
            class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
                Community
        </Link>
    </li>

    <li class="border-t md:border-none">
        <Link to={"/contact"}
            class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
                Contact
        </Link>
    </li>
    
  </ul>



  <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
    <li class="border-t md:border-none">
      {/* <a href="/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-normal">connect wallet</a> */}
    <button 
        class="block md:inline-block px-5 py-2 no-underline text-grey-darkest hover:text-grey-darker font-bold bg-[#FF6842] rounded-md">
            <Link to={"/login"}>
                Start Staking
            </Link>
        </button>
    </li>
    
  </ul>


</nav>
      
     </div> 
  )
}

export default NavbarResponsive
