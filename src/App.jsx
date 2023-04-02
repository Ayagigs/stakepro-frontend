// import { Routes, Route } from 'react-router-dom';
// import Homepage from './components/HomePage';
// import AboutUsPage from './pages/AboutUsPage';
// import BlogsPage from './pages/BlogsPage';
// import CommunityPage from './pages/CommunityPage';
// import ContactPage from './pages/ContactPage';
// import PricingMonthly from './pages/PricingMonthly';
// import SideNavbar from './components/SideNavbar';


//  import Web3Modal from "web3modal";
//  //import { ethers } from "ethers";

//  //import React, {useState,useEffect} from 'react';
//  import WalletConnect from "@walletconnect/web3-provider";
//  import CoinbaseWalletSDK from "@coinbase/wallet-sdk";


//  import WalletConnectProvider from '@walletconnect/web3-provider';
// // import Navbar from './components/Navbar';
// // import Sidebar from './dashboard/Sidebar';
// // import Sidebar1 from './dashboard/Sidebar1';
// // import Sidebar2 from './dashboard/Sidebar2';
// // import Sidebar3 from './dashboard/Sidebar3';
// // import UserScreenDashboard from './dashboard/UserScreenDashboard';
// // import DashboardWallet from './dashboard/DashboardWallet';
// import UserDashboardHome from './dashboard/HomeDashboard/UserDashboardHome';
// import { connected } from 'process';
// import Navbar from './components/Navbar';
// import UserDashboardHistory from './dashboard/HomeDashboard/UserDashboardHistory';
// import UserDashboardTrade from './dashboard/HomeDashboard/UserDashboardTrade';
// import UserAccountWallet1 from './dashboard/WalletDashboard/UserAccountWallet1';
// import Stake from './pages/Stake';



// // const App = () => {
 
//   // const options = new WalletConnectProvider({
//   //   rpc: {
//   //     137: 'https://matic-mainnet.chainstacklabs.com',
//   //   },
//   //   infuraId: import.meta.env.INFURA_ID,
//   // });
  
//   // const providerOptions = {

//   //   binancechainwallet: {
//   //     package: true,
//   //   },
//   //  };

//     // const web3Modal = new Web3Modal({
//     //   network: "rinkeby",
//     //   theme: "light", // optional, 'dark' / 'light',
//     //   cacheProvider: false, // optional
//     //   providerOptions, // required
//     // });

//   // const [connectedAccount, setConnectedAccount] = useState("");

//   // const connectWeb3Wallet = async () => {
//   //   try {
//   //     const web3Provider = await web3Modal.connect();
//   //     const library = new ethers.providers.Web3Provider(web3Provider);
//   //     const web3Accounts = await library.listAccounts();
//   //     setConnectedAccount(web3Accounts[0]);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // const disconnectWeb3Modal = async () => {
//   //   await web3Modal.clearCachedProvider();
//   //   setConnectedAccount("");
//   // };


  
//     //  if (connectedAccount) return <div>
//     //    <button onClick={disconnectWeb3Modal}>Disconnect</button>
//     //    <DashboardHome/>  
//     //   //  <DashboardHistory/> 
//     //    </div>

//     // else if (!connectedAccount) return <div>
//     //      <button onClick={connectWeb3Wallet}>Connect Wallet </button>   
//     //          <Routes>
//     //            <Route path="/" element={<Homepage/>}></Route>
//     //            <Route path="about" element={<AboutUsPage/>}></Route> 
//     //            <Route path="stake" element={<UserDashboardHome/>}></Route> 
//     //            <Route path="pricing" element={<PricingMonthly/>}></Route> 
//     //           <Route path="blogs" element={<BlogsPage/>}></Route> 
//     //           <Route path="community" element={<CommunityPage/>}></Route> 
//     //            <Route path="contact" element={<ContactPage/>}></Route> 
//            {/* </Routes>         */}


//             {/* <Routes> */}
//                {/* <Route path="/" element={<UserDashboardHome/>}></Route>
//                <Route path="stake" element={<UserDashboardHistory/>}></Route>  
//                <Route path="trade" element={<UserDashboardTrade/>}></Route>  
//               <Route path="account" element={<UserAccountWallet1/>}></Route>   
//               <Route path="developer" element={<UserDashboardTrade/>}></Route> 
//               //  <Route path="support" element={<UserDashboardTrade/>}></Route>   
//            </Routes>          
//            */}

//           {/* <UserAccountWallet1/> */}
//            {/* <UserScreenDashboard/> */}
//           {/* <UserDashboardHome/>    */}
//           {/* <UserDashboardHistory/>  */}
//           {/* <UserDashboardTrade/> */}
//           {/* <ApexChart/> */}


//        {/* (</div>
//     return null;
//   }

//   export default App; */}



// // import { useState } from "react";
// // import { ethers } from "ethers";
// // import Homepage from "./components/HomePage";
  

// const handleData = (data) => {
//   console.log(data);
// };
 
  
//   export default function App() {
//     // const [msg, setMsg] = useState();
//     // const [accnt, setAccnt] = useState();
//     // const [connected, setAccount] = useState(false);
  

//     //Motseki
//       // const cryptoButton = async () => {
//       //   const { ethereum } = window;
//       //   if (ethereum.isMetaMask) {
//       //     setMsg("MetaMask Installed");
//       //     await ethereum.request({ method: "eth_requestAccounts" });
//       //     const accounts = await ethereum.request({ method: "eth_accounts" });
  
//       //     const provider = new ethers.providers.Web3Provider(ethereum);
//       //     const signer = provider.getSigner();
//       //     const message = randomString(16);
//       //     const signature = await signer.signMessage(message);
  
//       //     const signAddress = await ethers.utils.verifyMessage(message, signature);
//       //     if (signAddress.toLowerCase() === accounts[0].toLowerCase()) {
//       //       setMsg("User Login");
//       //       setAccnt(accounts[0]);
//       //       setAccount(true)

//       //     } else {
//       //       setMsg("Login failed");
//       //     }
//       //   } else {
//       //     setMsg("MetaMask is not installed");
//       //   }
//       // };

//     return (
//       <div className="App">
//       <header className="App-header">

//        <Routes>            
//         <Route path="/" element={<Homepage/>}></Route>
//         <Route path="about" element={<AboutUsPage/>}></Route> 
//         <Route path="stake" element={<Stake/>}></Route> 
//         <Route path="pricing" element={<PricingMonthly/>}></Route> 
//         <Route path="blogs" element={<BlogsPage/>}></Route> 
//         <Route path="community" element={<CommunityPage/>}></Route> 
//         <Route path="contact" element={<ContactPage/>}></Route> 
//         <Route path="wallet" element={<Stake/>}></Route>    
//       </Routes>          

//       {/* <Stake/> */}
//       </header>
//      </div>
//     );
//   }


import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useState } from "react";
import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

function App() {
  console.log(process.env.INFURA_ID)
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
    <div className="App">
      <header className="App-header">
    
        <br />

        {connectedAccount && <p>Connected to ${connectedAccount}</p>}

        {!connectedAccount ? (
          <button onClick={connectWeb3Wallet}>Connect Wallet</button>
        ) : (
          <button onClick={disconnectWeb3Modal}>Disconnect</button>
        )}
      </header>
    </div>
  );
}

export default App;


