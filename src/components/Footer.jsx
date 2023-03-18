import React from 'react'

function Footer() {
  return (
    <div>
         
        {/* <!-- Footer --> */}
    <footer class="bg-[#EFFAFF;]">

        {/* <!-- CTA Section --> */}
    <section id="cta" class="bg-[#EFFAFF;]">
      {/* <!-- Flex Container --> */}
      <div
        class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0"
      >
        {/* <!-- Heading --> */}

        <div
        class="flex flex-col items-start"
      >
        <h2
          class="text-5xl font-bold leading-tight text-center text-black md:text-4xl md:max-w-xl md:text-left"
        >
          News letter
        </h2>
        <p>Be the first one to know  about discounts, offers and events</p>
        </div>
       
         {/* <!-- Input Container --> */}
         <div class="flex flex-col justify-between">
          <form>
            <div class="flex space-x-3">
             
            <div 
            class="w-2/3 flex justify-start items-center relative w-full"
            > 
                <input
                  placeholder="Enter your email"
                  class="border border-gray-400 rounded-lg p-2 pl-10 w-full bg-[#FF6842] placeholder-[white]"
                  />
                <img src="img/email_footerIcon.svg" class="absolute mr-2 w-10" alt="Search Icon" />
            </div>

      

              {/* <button
                class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button> */}
            </div>
          </form>
        </div> 
      </div>
    </section>

      {/* <!-- Flex Container --> */}
      <div
        class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
      >

        {/* <!-- Logo and social links container --> */}
        <div
          class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
        >
          {/* <div class="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div> */}
          {/* <!-- Logo --> */}
          <div>
            <img src="img/logo_footer.svg" class="h-8" alt="" />
          </div>

          <p class="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in 
          volutpat ullamcorper amet adipiscing fermentum.</p>
         
          <div class="flex justify-center space-x-4">
           
            <a href="#">
              <img src="img/linkedIn_footer.svg" alt="" class="h-8" />
            </a>
        
            <a href="#">
              <img src="img/google_footer.svg" alt="" class="h-8" />
            </a>
          
            <a href="#">
              <img src="img/facebook_footer.svg" alt="" class="h-8" />
            </a>
    
            <a href="#">
              <img src="img/instagram_footer.svg" alt="" class="h-8" />
            </a>
            <a href="#">
              <img src="img/twitter_footer.svg" alt="" class="h-8" />
            </a>
          </div>
        </div>
        {/* <!-- List Container --> */}
        <div class="flex justify-around space-x-20">
          <div class="flex flex-col space-y-3 text-black">
            <a href="#" class="hover:text-brightRed">Company</a>
            <a href="#" class="hover:text-brightRed">About</a>
            <a href="#" class="hover:text-brightRed">Legal</a>
            <a href="#" class="hover:text-brightRed">FAQs</a>
            <a href="#" class="hover:text-brightRed">Prices</a>
          </div>
          <div class="flex flex-col space-y-3 text-black">
            <a href="#" class="hover:text-brightRed">Resources</a>
            <a href="#" class="hover:text-brightRed">Blog</a>
            <a href="#" class="hover:text-brightRed">Videos</a>
            <a href="#" class="hover:text-brightRed">Tutorials</a>
            <a href="#" class="hover:text-brightRed">Events and News</a>
          </div>

          <div class="flex flex-col space-y-3 text-black">
            <a href="#" class="hover:text-brightRed">Help</a>
            <a href="#" class="hover:text-brightRed">Expects</a>
            <a href="#" class="hover:text-brightRed">Contact</a>
            <a href="#" class="hover:text-brightRed">Community</a>
            <a href="#" class="hover:text-brightRed">Support Center</a>
          </div>
          <div class="flex flex-col space-y-3 text-black">
            <a href="#" class="hover:text-brightRed">Trade</a>
            <a href="#" class="hover:text-brightRed">Buy & Sell</a>
            <a href="#" class="hover:text-brightRed">Stake coin</a>
            <a href="#" class="hover:text-brightRed">Market Place</a>
            <a href="#" class="hover:text-brightRed">Check Rewards</a>
          </div>
        </div>

        {/* <!-- Input Container --> */}
        {/* <div class="flex flex-col justify-between">
          <form>
            <div class="flex space-x-3">
              <input
                type="text"
                class="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
        </div>  */}
      </div>


      

      {/* <!-- Input Container --> */}
    <div class="flex flex-col justify-between">
          <div class="hidden h-[92px] text-center text-white bg-[#022738] md:block">
          &copy; Copyright 2023, All Rights Reserved by Stakepro
          </div>
        </div>

        </footer>
    </div>
  )
}

export default Footer
