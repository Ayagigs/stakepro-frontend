import React from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import logo from '../assets/under_contruction.jpg';


function Homepage(props) {
  const navigate = useNavigate();

  // const Home = (props) => {
  //   const navigate = useNavigate();
  
  return (
    <div>
      <Navbar/>
      <h1 class="text-center ... text-5xl ... pt-6 ...">Home page</h1> 

      {/* <div class="flex justify-center pt-12">
       
      <Link to={"/start"}>
        <button class="bg-[#FF6842] hover:bg-[#FF6842] text-white font-bold py-2 px-4 border border-[#FF6842] rounded">
          Start 
        </button>
      </Link>     
      </div> */}

       {/* Button */}
       <div class="flex justify-left pt-12">
        <button onClick={() => navigate("/landing")}
        class="bg-[#FF6842] hover:bg-[#FF6842] text-white font-bold py-2 px-4 border border-[#FF6842] rounded"
        >Start Staking</button>
      </div>

      <div class="flex items-center justify-center h-screen">
        <img className="h-{100px} w-[50%] " src={logo} alt='logo'/>
      </div>
    </div>
  )
}

export default Homepage
