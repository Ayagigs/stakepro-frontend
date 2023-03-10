import { Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import BlogsPage from './pages/BlogsPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';
import LandingPage from './components/LandingPage';
import PricingMonthly from './pages/PricingMonthly';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route> 
        <Route path="home" element={<Homepage/>}></Route>
        <Route path="about" element={<AboutUsPage/>}></Route> 
        <Route path="pricing" element={<PricingMonthly/>}></Route> 
        <Route path="blogs" element={<BlogsPage/>}></Route> 
        <Route path="community" element={<CommunityPage/>}></Route> 
        <Route path="contact" element={<ContactPage/>}></Route> 
      </Routes>
    </div>
  );
}

export default App;











