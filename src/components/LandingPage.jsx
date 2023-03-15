import React from 'react'
import LandingNavBar from './LandingNavBar'
import logo from '../assets/under_contruction.jpg';
import Footer from './Footer';

function LandingPage() {
  return (
    <div>
      <LandingNavBar/>
      {/* <section id="cta1" class="bg-[#FFFFFF]  bg-[url('../img/home.svg')] h-[29.75rem]"> */}
      <section id="cta1" class="bg-[#FFFFFF]  h-[29.75rem]">
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
          class="text-5xl font-bold leading-tight text-center text-black md:text-4xl md:max-w-full md:text-left"
        >
          {/* Simplify how your team works today */}
          Make <span class="text-[#E85631]">Profit</span> and Get <span class="text-[#E85631]">Rewarding</span> Returns on Crypto Investment
        </h2>
        {/* <!-- Button --> */}

        <h6
          class="text-sm font-bold leading-tight text-center text-black md:text-sm md:max-w-full md:text-left"
        >
          Our secured platform is designed to make crypto trading easy and accessible, no matter where you are 
          located. With just a few clicks, you can deposit money with mobile money, buy crypto, and 
          start trading. You can also use mobile money to withdraw your profits.
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
      {/* <div  className='text-align: center'>
        <button onClick={() => navigate("/landing")}
        class="bg-[#FF6842] hover:bg-[#FF6842] text-white font-bold py-2 px-4 border border-[#FF6842] rounded"
        >Start Staking</button>
      </div> */}
    </section>


     {/* <!-- Testimonials --> */}
     <section id="testimonials">
      {/* <!-- Container to heading and testm blocks --> */}
      <div class="max-w-6xl px-5 mx-auto mt-0 text-center">
        {/* <!-- Heading --> */}

        <h2 class="text-lg font-bold text-center text-[#E85631]">
          Stake Coins, Buy and Sell, Get Rewards
        </h2>
     
        <h2 class="text-4xl font-bold text-center">
          Get All Crypto Coin
        </h2>
        {/* <!-- Testimonials Container --> */}
        <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* <!-- Testimonial 1 --> */}
          <div
            class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <img src="img/bitcoin_icon.svg" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Bitcoin</h5>
            <p class="text-sm text-darkGrayishBlue">
              $571,44,834
            </p>
            <img src="img/bitcoin_icon1.svg" class="w-[191.03px] h-[24.53px] -mt-14" alt="" />
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src="img/ethereum_icon.svg" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Ethereum</h5>
            <p class="text-sm text-darkGrayishBlue">
              $571,44,834
            </p>
            <img src="img/ethereum_icon1.svg" class="w-[191.03px] h-[24.53px] -mt-14" alt="" />
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src="img/monero_icon.svg" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Monero</h5>
            <p class="text-sm text-darkGrayishBlue">
              $571,44,834
            </p>
            <img src="img/monero_icon1.svg" class="w-[191.03px] h-[24.53px] -mt-14" alt="" />
          </div>

           {/* <!-- Testimonial 3 --> */}
           <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src="img/litecoin_icon.svg" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Litecoin</h5>
            <p class="text-sm text-darkGrayishBlue">
              $571,44,834
            </p>
            <img src="img/litecoin_icon1.svg" class="w-[191.03px] h-[24.53px] -mt-14" alt="" />
          </div>
        </div>
        {/* <!-- Button --> */}
        <div class="my-16">
          <a
            href="#"
            class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >Get Started</a
          >
        </div>
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





{/* 
<!-- Features Section --> */}
    <section id="features">
      {/* <!-- Flex container --> */}
      <div
        class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"
      >
        {/* <!-- What's Different --> */}
        <div class="flex flex-col space-y-12 md:w-1/2">
          <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        {/* <!-- Numbered List --> */}
        <div class="flex flex-col space-y-8 md:w-1/2">
          {/* <!-- List Item 1 --> */}
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            {/* <!-- Heading --> */}
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  01
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Track company-wide progress
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Track company-wide progress
              </h3>
              <p class="text-darkGrayishBlue">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

          {/* <!-- List Item 2 --> */}
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            {/* <!-- Heading --> */}
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  02
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Advanced built-in reports
              </h3>
              <p class="text-darkGrayishBlue">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>

          {/* <!-- List Item 3 --> */}
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            {/* <!-- Heading --> */}
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  03
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Everything you need in one place
              </h3>
              <p class="text-darkGrayishBlue">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Testimonials --> */}
    <section id="testimonials">
      {/* <!-- Container to heading and testm blocks --> */}
      <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* <!-- Heading --> */}
        <h2 class="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        {/* <!-- Testimonials Container --> */}
        <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* <!-- Testimonial 1 --> */}
          <div
            class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <img src="img/avatar-anisha.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Anisha Li</h5>
            <p class="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src="img/avatar-ali.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Ali Bravo</h5>
            <p class="text-sm text-darkGrayishBlue">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src="img/avatar-richard.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Richard Watts</h5>
            <p class="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
        {/* <!-- Button --> */}
        <div class="my-16">
          <a
            href="#"
            class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >Get Started</a
          >
        </div>
      </div>
    </section>

    {/* <!-- CTA Section --> */}
    <section id="cta" class="bg-brightRed">
      {/* <!-- Flex Container --> */}
      <div
        class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0"
      >
        {/* <!-- Heading --> */}
        <h2
          class="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left"
        >
          Simplify how your team works today
        </h2>
        {/* <!-- Button --> */}
        <div>
          <a
            href="#"
            class="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
            >Get Started</a
          >
        </div>
      </div>
    </section>

    <Footer/>

    </div>
  )
}

export default LandingPage
