import React from 'react'
import Navbar from '../components/Navbar'
import logo from '../assets/under_contruction.jpg';

function ContactPage() {
  return (
    <div>
      <Navbar/>
      {/* import logo from '../assets/under_contruction.jpg'; */}
      <h1 class="text-center ... text-5xl ... pt-6 ...">Contact page</h1>
      <div class="flex items-center justify-center h-screen">
        <img className="h-{100px} w-[50%] " src={logo} alt='logo'/>
      </div>
    </div>
  )
}

export default ContactPage
