import React from 'react'
import LandingNavBar from '../components/LandingNavBar'
import logo from '../assets/under_contruction.jpg';

function LandingPage() {
  return (
    <div>
      <LandingNavBar/>
      {/* import logo from '../assets/under_contruction.jpg'; */}
      <h1 class="text-center ... text-5xl ... pt-6 ...">Landing page</h1>
      <div class="flex items-center justify-center h-screen">
        <img className="h-{100px} w-[50%] " src={logo} alt='logo'/>
      </div>
    </div>
  )
}

export default LandingPage
