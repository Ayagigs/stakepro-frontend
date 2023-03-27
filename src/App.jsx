import { Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import BlogsPage from './pages/BlogsPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';
import PricingMonthly from './pages/PricingMonthly';
import SideNavbar from './components/SideNavbar';


import Web3Modal from "web3modal";
import { ethers } from "ethers";

import React, {useState,useEffect} from 'react';
import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";


import WalletConnectProvider from '@walletconnect/web3-provider';
import Navbar from './components/Navbar';
// import Sidebar from './dashboard/Sidebar';
// import Sidebar1 from './dashboard/Sidebar1';
// import Sidebar2 from './dashboard/Sidebar2';
// import Sidebar3 from './dashboard/Sidebar3';
// import UserScreenDashboard from './dashboard/UserScreenDashboard';
// import DashboardWallet from './dashboard/DashboardWallet';
import UserDashboardHome from './dashboard/HomeDashboard/UserDashboardHome';
import UserDashboardHistory from './dashboard/HomeDashboard/UserDashboardHistory';
import UserDashboardTrade from './dashboard/HomeDashboard/UserDashboardTrade';
import UserAccountWallet1 from './dashboard/WalletDashboard/UserAccountWallet1';


const App = () => {
 
  const options = new WalletConnectProvider({
    rpc: {
      137: 'https://matic-mainnet.chainstacklabs.com',
    },
    infuraId: import.meta.env.INFURA_ID,
  });
  
  const providerOptions = {

    binancechainwallet: {
      package: true,
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


  
     if (connectedAccount) return <div>
       <button onClick={disconnectWeb3Modal}>Disconnect</button>
       <DashboardHome/>  
      //  <DashboardHistory/> 
       </div>

    else if (!connectedAccount) return <div>
         <button onClick={connectWeb3Wallet}>Connect Wallet </button>   
             <Routes>
               <Route path="/" element={<Homepage/>}></Route>
               <Route path="about" element={<AboutUsPage/>}></Route> 
               <Route path="stake" element={<UserDashboardHome/>}></Route> 
               <Route path="pricing" element={<PricingMonthly/>}></Route> 
              <Route path="blogs" element={<BlogsPage/>}></Route> 
              <Route path="community" element={<CommunityPage/>}></Route> 
               <Route path="contact" element={<ContactPage/>}></Route> 
           {/* </Routes>         */}


            {/* <Routes> */}
               <Route path="/" element={<UserDashboardHome/>}></Route>
               <Route path="stake" element={<UserDashboardHistory/>}></Route>  
               <Route path="trade" element={<UserDashboardTrade/>}></Route>  
              <Route path="account" element={<UserAccountWallet1/>}></Route>   
              <Route path="developer" element={<UserDashboardTrade/>}></Route> 
               <Route path="support" element={<UserDashboardTrade/>}></Route>   
           </Routes>          
          

          {/* <UserAccountWallet1/> */}
           {/* <UserScreenDashboard/> */}
          {/* <UserDashboardHome/>    */}
          {/* <UserDashboardHistory/>  */}
          {/* <UserDashboardTrade/> */}
          {/* <ApexChart/> */}


       (</div>
    return null;
  }

  export default App;











  
   


  

//   return (
//      <div className="App">
//        <header className="App-header">

//        {!connectedAccount ? (
//            <button onClick={connectWeb3Wallet}>Connect Wallet </button>
//          ) : (
//            <button onClick={disconnectWeb3Modal}>Disconnect</button>
//          )} 
      
//          {/* <Routes>
//              <Route path="/" element={<Homepage/>}></Route>
//               <Route path="about" element={<AboutUsPage/>}></Route> 
//               <Route path="pricing" element={<PricingMonthly/>}></Route> 
//               <Route path="blogs" element={<BlogsPage/>}></Route> 
//               <Route path="community" element={<CommunityPage/>}></Route> 
//               <Route path="contact" element={<ContactPage/>}></Route> 
//             </Routes>    */}
      

//      {connectedAccount && <DashboardHome/>}
//     {!connectedAccount &&
//        <Routes>
//        <Route path="/" element={<Homepage/>}></Route>
//         <Route path="about" element={<AboutUsPage/>}></Route> 
//         <Route path="pricing" element={<PricingMonthly/>}></Route> 
//         <Route path="blogs" element={<BlogsPage/>}></Route> 
//         <Route path="community" element={<CommunityPage/>}></Route> 
//         <Route path="contact" element={<ContactPage/>}></Route> 
//       </Routes> 
//     }
//        </header>
//      </div>
//    );
//  }

//  export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import Card from "./components/Card"
// import { useMetaMask } from "metamask-react";

// import data from "./data"

// import './App.css'


// export default function App() {

//   const cards = data.map(item => {
//           return (
//               <Card 
//                   key={item.id}
//                   {...item}
                
//               />
//           )
//    })        
  

  