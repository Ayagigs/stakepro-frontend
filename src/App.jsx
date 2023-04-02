import { Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import BlogsPage from './pages/BlogsPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';
import LandingPage from './components/LandingPage';
import PricingMonthly from './pages/PricingMonthly';
import SideNavbar from './components/SideNavbar';

 import { useMetaMask } from "metamask-react";
import Stake from './pages/Stake';


const App = () => {


  const { status, connect, account, chainId, ethereum } = useMetaMask();

  if (status === "initializing") return <div>
    {/* <Navbar />
    <Hero /> */}
    Synchronisation with MetaMask ongoing...
    </div>

  if (status === "unavailable") return <div>
    {/* <Navbar />
    <Hero /> */}
    MetaMask not available :(</div>

  if (status === "notConnected") return <div>

<Routes>
          {/* <Route path="/" element={<LandingPage/>}></Route>  */}
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="about" element={<AboutUsPage/>}></Route> 
          <Route path="stake" element={<Stake/>}></Route> 
          <Route path="pricing" element={<PricingMonthly/>}></Route> 
          <Route path="blogs" element={<BlogsPage/>}></Route> 
          <Route path="community" element={<CommunityPage/>}></Route> 
          <Route path="contact" element={<ContactPage/>}></Route> 

          <Route path="connect wallet" element={<SideNavbar/>}></Route> 
        </Routes>    

      {/* <Navbar />
      <Hero /> */}
      {/* <button onClick={connect}>Connect to MetaMask</button> */}
   </div>

  if (status === "connecting") return <div>
    {/* <Navbar />
    <Hero /> */}
    Connecting...</div>

  if (status === "connected") return <div>
      Connected account {account} on chain ID {chainId} 
      <SideNavbar/>
    </div>

  return null;

  //  return (
  //    <div className="App">
  //      <Routes>
  //        <Route path="/" element={<LandingPage/>}></Route> 
  //        <Route path="home" element={<Homepage/>}></Route>
  //        <Route path="about" element={<AboutUsPage/>}></Route> 
  //        <Route path="pricing" element={<PricingMonthly/>}></Route> 
  //        <Route path="blogs" element={<BlogsPage/>}></Route> 
  //        <Route path="community" element={<CommunityPage/>}></Route> 
  //        <Route path="contact" element={<ContactPage/>}></Route> 
  //      </Routes>    

  //    </div>
  //  );
}

export default App;











