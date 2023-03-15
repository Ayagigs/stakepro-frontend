import React from 'react'
import Navbar from '../components/Navbar'
import logo from '../assets/under_contruction.jpg';
import Footer from '../components/Footer';

function ProfileEditPage() {
  return (
    <div>
      <Navbar/>
      
      <section id="cta1" class="bg-brightRed  bg-[url('../img/home.svg')] h-[29.75rem]">
      {/* <!-- Flex Container --> */}
      {/* <div
        class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0"
      > */}
        <div
        class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12  md:py-12 md:flex-col md:space-y-10"
      >
        {/* <!-- Heading --> */}
        <h2
          // class="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left"
          class="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-full md:text-left"
        >
          {/* Simplify how your team works today */}
          Earn Extra Income and Get Rewarding Returns on Cryto Investments with Mobile Money.
        </h2>
        {/* <!-- Button --> */}

        <h6
          class="text-sm font-bold leading-tight text-center text-white md:text-sm md:max-w-full md:text-left"
        >
          Our secured platform is designed to make crypto trading easy and accessible, no matter where you are located. 
          With just a few clicks, you can deposit money with mobile money, buy crypto, and start trading. You can also use mobile money to withdraw your profits.
        </h6> 

        <div>
          <a
            href="#"
            class="p-3 px-6 pt-2 text-white bg-[#FF6842] rounded-full shadow-2xl baseline hover:bg-gray-900"
            >Start Staking</a
          >
        </div>
      </div>

      {/* <div class="flex justify-start pt-12"> */}
      <div  className='text-align: center'>
        <button onClick={() => navigate("/landing")}
        class="bg-[#FF6842] hover:bg-[#FF6842] text-white font-bold py-2 px-4 border border-[#FF6842] rounded"
        >Start Staking</button>
      </div>
    </section>


    <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-start">
  {/* <h2 class="text-5xl mb-3 text-black">Contact Us</h2>
  <p class="text-black">Kickstart your career in BioPharma with the Mendeleev Institute right now</p> */}
  <button onClick={() => navigate("/landing")}
  class="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">
    Learn More</button>
</div>

      {/* <home_section1/>
      <div class="flex items-center justify-start">
        <img className="w-screen h-625 ..." src={home_svg} alt='logo'/>
      </div>

      <h1 class="text-center ... text-5xl ... pt-6 ...">Home page</h1> 

       <div class="flex justify-left pt-12">
        <button onClick={() => navigate("/landing")}
        class="bg-[#FF6842] hover:bg-[#FF6842] text-white font-bold py-2 px-4 border border-[#FF6842] rounded"
        >Start Staking</button>
      </div>

      <div class="flex items-center justify-center h-screen">
        <img className="h-{100px} w-[50%] " src={logo} alt='logo'/>
      </div>  */}

{/* <!-- Image --> */}
    {/* <div class="md:w-1/2"> 
      <img src="img/home.svg" alt="" />
    </div> */}



<section id="hero">

  <div
    class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
  >
   
    <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
      <h1
        class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
      >
        Bring everyone together to build better products
      </h1>
      <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
        Manage makes it simple for software teams to plan day-to-day tasks
        while keeping the larger team goals in view.
      </p>
      <div class="flex justify-center md:justify-start">
        <a
          href="#"
          class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >Get Started</a
        >
      </div>
    </div>
   
    <div class="md:w-1/2">
      <img src="img/illustration-intro.svg" alt="" />
    </div>
  </div>
</section>



      <Footer/>
    </div>
  )
}

export default ProfileEditPage
