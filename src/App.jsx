import { Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import BlogsPage from './pages/BlogsPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';
import PricingMonthly from './pages/PricingMonthly';
import Stake from './pages/Stake';
import StakeTonen from './pages/StakeToken';
import TransactionsHistory from './pages/TransactionsHistory';


const App = () => {


   return (
      <div className="App">
      <Routes> 
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="about" element={<AboutUsPage/>}></Route> 
          <Route path="stake" element={<Stake/>}></Route> 
          <Route path="pricing" element={<PricingMonthly/>}></Route> 
          <Route path="blogs" element={<BlogsPage/>}></Route> 
          <Route path="community" element={<CommunityPage/>}></Route> 
          <Route path="contact" element={<ContactPage/>}></Route> 
          <Route path="login" element={<Stake/>}></Route>  
          <Route path="events" element={<TransactionsHistory/>}></Route>  
        </Routes>     
      </div>
    );
}

export default App;











