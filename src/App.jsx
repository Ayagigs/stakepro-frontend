import { Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import BlogsPage from './pages/BlogsPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';
import PricingMonthly from './pages/PricingMonthly';
import Stake from './pages/Stake';


const App = () => {
   
    return (
      <div className="App">
      <header className="App-header">

       <Routes>            
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="about" element={<AboutUsPage/>}></Route> 
        <Route path="stake" element={<Stake/>}></Route> 
        <Route path="pricing" element={<PricingMonthly/>}></Route> 
        <Route path="blogs" element={<BlogsPage/>}></Route> 
        <Route path="community" element={<CommunityPage/>}></Route> 
        <Route path="contact" element={<ContactPage/>}></Route> 
        <Route path="wallet" element={<Stake/>}></Route>    
      </Routes>          

      </header>
     </div>
    );
  }

  export default App;



