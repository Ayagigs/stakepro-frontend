import React, {useState} from 'react'
import { ethers } from "ethers";
import { Link } from 'react-router-dom';
import logo from '../assets/stakepro_log.svg';
import percon_icon from '../assets/person.svg';
import UserDashboardHome from '../dashboard/HomeDashboard/UserDashboardHome';
//Start


// import Web3Modal from "web3modal";
// import { ethers } from "ethers";
// import WalletConnect from "@walletconnect/web3-provider";
// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

//Motseki
// const randomString = function (length) {
//   var text = "";
//   var possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   for (var i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text;
// };

// // function Child1({ parentCallback })
 export default function Navbar() {
//   const providerOptions = {
//     binancechainwallet: {
//       package: true,
//     },
//     walletconnect: {
//       package: WalletConnect, // required
//       options: {
//         infuraId:  process.env.INFURA_ID// required
//       }
//     },
  
//     coinbasewallet: {
//       package: CoinbaseWalletSDK, // Required
//       options: {
//         appName: "Coinbase", // Required
//         infuraId: process.env.INFURA_ID, // Required
//         chainId: 4, //4 for Rinkeby, 1 for mainnet (default)
//       },
//     },
//   };

//   const web3Modal = new Web3Modal({
//     network: "rinkeby",
//     theme: "light", // optional, 'dark' / 'light',
//     cacheProvider: false, // optional
//     providerOptions, // required
//   });

//   const [connectedAccount, setConnectedAccount] = useState("");

//   const connectWeb3Wallet = async () => {
//     try {
//       const web3Provider = await web3Modal.connect();
//       const library = new ethers.providers.Web3Provider(web3Provider);
//       const web3Accounts = await library.listAccounts();
//       setConnectedAccount(web3Accounts[0]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const disconnectWeb3Modal = async () => {
//     await web3Modal.clearCachedProvider();
//     setConnectedAccount("");
//   };

//End









  const [show, setShow] = useState(false);

        const [open, setOpen] = React.useState(false);
        const [flyer, setFlyer] = React.useState(false);
        const [flyerTwo, setFlyerTwo] = React.useState(false);
        const [flyerThree, setFlyerThree] = React.useState(false);




        const [msg, setMsg] = useState();
        const [account, setAccnt] = useState();
        const [connected, setAccount] = useState({data: false});
      
    
        //Motseki
          const cryptoButton = async () => {
            const { ethereum } = window;
            if (ethereum.isMetaMask) {
              setMsg("MetaMask Installed");
              await ethereum.request({ method: "eth_requestAccounts" });
              const accounts = await ethereum.request({ method: "eth_accounts" });
      
              const provider = new ethers.providers.Web3Provider(ethereum);
              const signer = provider.getSigner();
              const message = randomString(16);
              const signature = await signer.signMessage(message);
      
              const signAddress = await ethers.utils.verifyMessage(message, signature);
              if (signAddress.toLowerCase() === accounts[0].toLowerCase()) {
                setMsg("User Login");
                setAccnt(accounts[0]);
                setAccount(true)
    
              } else {
                setMsg("Login failed");
              }
            } else {
              setMsg("MetaMask is not installed");
            }
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

                {show==true ?
                <Link to={"/landing"} 
                    className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Landing
                  </Link>  : ""}

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
                       
                        onClick={cryptoButton}
                      >
                                
                          <Link to={"/wallet"}
                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#FF6842] hover:bg-[#FF6842]"
                              > 
                                 connect wallet        
                          </Link> 

                      {/* {connectedAccount && <p>Connected to ${connectedAccount}</p>}

                      {!connectedAccount ? (
                        <button onClick={connectWeb3Wallet}>Connect Wallet</button>
                      ) : (
                        <button onClick={disconnectWeb3Modal}>Disconnect</button>
                      )} */}


                            
                                     
                      </button> 

                    

                      {/* {!connected ?( <button className="ConnectBtn" onClick={cryptoButton}>
                          Connect Wallet
                          <Homepage/>
                        </button>):(
                          <div>
                            Not Connected
                          // <UserDashboardHome/>
                          </div>
                        )}  */}
                  
                    </div>
              </div>


            </div>
          </div>

        </div>
    </div>
  )
 }

