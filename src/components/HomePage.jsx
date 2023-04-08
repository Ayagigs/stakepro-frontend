import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import home_section1 from '../pages/home_section1';
import logo from '../assets/under_contruction.jpg';
import home_svg from '../assets/home.svg';
import './home.css';
import NavbarResponsive from './NavbarResponsive';
import FooterResponsive from './FooterResponsive';

{/* <link rel="stylesheet" href="css/main.css" /> */}


function Homepage(props) {
  const navigate = useNavigate();

  return (
    <div>
      {/* <Navbar/> */}
      <NavbarResponsive/>


    <div class="px-5 py-24 mx-auto flex flex-wrap w-full bg-[#022738]">
     <div class="h-full p-4 lg:w-1/2">
       <div class=" bg-[#022738] px-8 pt-16 pb-16 relative">

       <h2
         // class="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left"
         class="text-5xl font-bold leading-tight text-start text-white md:text-4xl md:max-w-full md:text-left"
       >
          Stake Your Crypto, Earn Rewards, Join the Future
       </h2>

       
       <h4
         class="text-[18px] mt-10 mb-10 font-normal leading-tight text-start text-white md:text-sm md:max-w-full md:text-start"
       >
     Our secured platform is designed to make crypto staking easy and accessible, no matter where you are 
     located. With just a few clicks, you can connect your crypto wallet and start staking. Use StakePro and 
     start earning rewards today.
       </h4> 

       <Link to={"/login"}
           class="p-3 px-6  pt-2 text-white bg-[#FF6842] rounded-[2%] shadow-2xl baseline hover:bg-gray-900"
           >Start Staking
      </Link>


       </div>
     </div>
    
     <div class="h-full p-4 lg:w-1/2 bg-[#022738] flex items-center justify-center">
       <div class="bg-[#022738] px-0 pt-0 pb-16 relative">
       <div class="container  bg-[#022738] w-[614px] bg-[url('../img/home.svg')] h-[369px]"></div>
       </div>
     </div>
   </div>

{/* 
   <div class="container px-5 py-24 mx-auto flex flex-wrap">
     <div class="h-full p-4 lg:w-full">
       <div class=" bg-gray-100 px-8 pt-16 pb-16 relative">
         <h2 class="text-xs mb-1">CATEGORY</h2>
         <h1 class="title-font sm:text-2xl text-xl  mb-3">Raclette Blueberry Nextious</h1>
         <p class="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
         <a class="text-indigo-500 inline-flex items-center">Learn More</a>
       </div>
     </div>
   </div> */}



     {/* <!-- Testimonials --> */}
     <section id="testimonials">
      {/* <!-- Container to heading and testm blocks --> */}
      <div class="max-w-6xl px-5 mx-auto mt-5 text-center">
        {/* <!-- Heading --> */}

        <h2 class="text-lg font-bold text-center text-[#E85631]">
         Coins, Buy and Sell, Get Rewards
        </h2>
     
        <h2 class="text-4xl font-bold pt-5 text-center">
          Trending Assets
        </h2>
        {/* <!-- Testimonials Container --> */}
        <div class="flex flex-col mt-5 md:flex-row md:space-x-6">
          {/* <!-- Testimonial 1 --> */}
          <div
            class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-transparent md:w-1/3"
          >
            <div class="flex flex-row">
            {/* <img src="img/bitcoin_icon.svg" class="w-16 -mt-14" alt="" /> */}
            <img src="img/bitcoin_icon.svg"  alt="" />
            <h5 class="text-lg font-bold">Bitcoin</h5>
            </div>
            <p class="text-sm text-darkGrayishBlue">
              $571,44,834
            </p>
            <img src="img/bitcoin_icon1.svg" class="w-[191.03px] h-[24.53px] -mt-14" alt="" />
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-transparent md:flex md:w-1/3"
          >
            <div class="flex flex-row">
            <img src="img/ethereum_icon.svg"  alt="" />
            <h5 class="text-lg font-bold">Ethereum</h5>
            </div>
            <p class="text-sm text-darkGrayishBlue">
              $571,44,834
            </p>
            <img src="img/ethereum_icon1.svg" class="w-[191.03px] h-[24.53px] -mt-14" alt="" />
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-transparent md:flex md:w-1/3"
          >
            <div class="flex flex-row">
            <img src="img/monero_icon.svg" alt="" />
            <h5 class="text-lg font-bold">Monero</h5>
            </div>

            <p class="text-sm text-darkGrayishBlue">
              $571,44,834
            </p>
            <img src="img/monero_icon1.svg" class="w-[191.03px] h-[24.53px] -mt-14" alt="" />
          </div>

           {/* <!-- Testimonial 3 --> */}
           <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-transparent md:flex md:w-1/3"
          >
            <div class="flex flex-row">
            <img src="img/litecoin_icon.svg" alt="" />
            <h5 class="text-lg font-bold">Litecoin</h5>
            </div>
            <p class="text-sm text-darkGrayishBlue">
              $571,44,834
            </p>
            <img src="img/litecoin_icon1.svg" class="w-[191.03px] h-[24.53px] -mt-14" alt="" />
          </div>
        </div>
      
      </div>
    </section>





    {/* <div class="container px-5 py-24 mx-auto flex flex-wrap">
     <div class="h-full p-4 lg:w-1/2">
       <div class=" bg-gray-100 px-8 pt-16 pb-16 relative">
         <h2 class="text-xs mb-1">CATEGORY</h2>
         <h1 class="title-font sm:text-2xl text-xl  mb-3">Raclette Blueberry Nextious</h1>
         <p class="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
         <a class="text-indigo-500 inline-flex items-center">Learn More</a>
       </div>
     </div>
     <div class="h-full p-4 lg:w-1/2">
       <div class="bg-gray-100 px-8 pt-16 pb-16 relative">
         <h2 class="text-xs mb-1">CATEGORY</h2>
         <h1 class="title-font sm:text-2xl text-xl  mb-3">Ennui Snackwave Thundercats</h1>
         <p class="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
         <a class="text-indigo-500 inline-flex items-center">Learn More</a>
       </div>
 

   </div> */}


   {/* <div class="container px-5 py-24 mx-auto flex flex-wrap">
     <div class="h-full p-4 lg:w-1/3">
       <div class=" bg-gray-100 px-8 pt-16 pb-16 relative">
         <h2 class="text-xs mb-1">CATEGORY</h2>
         <h1 class="title-font sm:text-2xl text-xl  mb-3">Raclette Blueberry Nextious</h1>
         <p class="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
         <a class="text-indigo-500 inline-flex items-center">Learn More</a>
       </div>
     </div>
     <div class="h-full p-4 lg:w-1/3">
       <div class="bg-gray-100 px-8 pt-16 pb-16 relative">
         <h2 class="text-xs mb-1">CATEGORY</h2>
         <h1 class="title-font sm:text-2xl text-xl  mb-3">Ennui Snackwave Thundercats</h1>
         <p class="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
         <a class="text-indigo-500 inline-flex items-center">Learn More</a>
       </div>
     </div>
     <div class="h-full p-4 lg:w-1/3">
       <div class="bg-gray-100 px-8 pt-16 pb-16 relative">
         <h2 class="text-xs mb-1">CATEGORY</h2>
         <h1 class="title-font sm:text-2xl text-xl mb-3">Selvage Poke Waistcoat</h1>
         <p class="mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
         <a class="text-indigo-500 inline-flex items-center">Learn More</a>
       </div>
     </div>
   </div> */}
  

    {/* <!-- Testimonials --> */}
    <section id="testimonials" class="bg-[#022738]">
      {/* <!-- Container to heading and testm blocks --> */}
      <div class="max-w-6xl px-5 mx-auto mt-32 text-start bg-[#022738]">
        {/* <!-- Heading --> */}
        <h3 class="text-xl font-bold text-[#FF6842] text-center pt-5 pb-5">
          Offers and Benefits
        </h3>

        <h2 class="text-4xl font-bold text-white text-center">
          Best Features
        </h2>
        {/* <!-- Testimonials Container --> */}
        {/* <div class="flex flex-col mt-24 md:flex-row md:space-x-6"> */}
        <div class="flex flex-col mt-10 pb-10 md:flex-row md:space-x-6">
          {/* <!-- Testimonial 1 --> */}
          <div
            // class="flex flex-col items-start p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
            class="flex flex-col items-start p-6 space-y-0 rounded-lg bg-[#022738] md:w-1/3"
          >
            {/* <img src="img/avatar-anisha.png" class="w-16 -mt-14" alt="" /> */}
            <img src="img/avator-icon1.svg" alt="" />
            <h5 class="text-lg font-bold text-[#31FFD9]">Safe and Secure</h5>
            <p class="text-sm text-darkGrayishBlue">
            We understand the importance of creating a reliable and secure 
            environment for you to make investments. 
            </p>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div
            class="hidden flex-col items-start p-6 space-y-0 rounded-lg bg-[#022738] md:flex md:w-1/3"
          >
             <img src="img/avator-icon2.svg" alt="" />
            <h5 class="text-lg font-bold text-[#31FFD9]">Expert Access</h5>
            <p class="text-sm text-darkGrayishBlue">
            We understand the importance of creating a reliable and secure environment 
            for you to make investments. 
            </p>
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div
            class="hidden flex-col items-start p-6 space-y-0 rounded-lg bg-[#022738] md:flex md:w-1/3"
          >
            <img src="img/avator-icon3.svg" alt="" />
            <h5 class="text-lg font-bold text-[#31FFD9]">Easy Transaction</h5>
            <p class="text-sm text-darkGrayishBlue">
            We understand the importance of creating a reliable and secure environment 
            for you to make investments. 
            </p>
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div
            class="hidden flex-col items-start p-6 space-y-0 rounded-lg bg-[#022738] md:flex md:w-1/3"
          >
            <img src="img/avator-icon4.svg" alt="" />
            <h5 class="text-lg font-bold text-[#31FFD9]">Rewards and Bonus</h5>
            <p class="text-sm text-darkGrayishBlue">
            We understand the importance of creating a reliable and secure environment 
            for you to make investments. 
            </p>
          </div>
        </div>
        {/* <!-- Button --> */}
        {/* <div class="my-16"> */}
          {/* <a
            href="#"
            class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >Get Started</a
          > */}
        {/* </div> */}
      </div>
    </section>


    
     {/* <!-- Testimonials --> */}
     <section id="testimonials">
      {/* <!-- Container to heading and testm blocks --> */}
      <div class="max-w-full px-5 mx-auto mt-0 text-start">
       
        <div class="flex flex-col pl-24 pr-20 mt-24 md:flex-row md:space-x-6">
          {/* <!-- Testimonial 1 --> */}
          <div
            class="flex flex-col items-center p-0 space-y-0 rounded-lg bg-veryLightGray  md:flex md:w-1/2"
          >
            <div class="flex flex-row">
            {/* <img src="img/bitcoin_icon.svg" class="w-16 -mt-14" alt="" /> */}
            <img src="img/img-laptop.svg"  alt="" />
            </div>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div
            class="hidden flex-col items-start p-0 space-y-0 rounded-lg bg-veryLightGray md:flex md:w-1/2"
          >
            <div class="flex flex-row">
            <h5 class="text-lg font-bold text-[#FF6842]">Access the App from all Devices</h5>
            </div>
            <h5 class="text-4xl font-bold text-black">Trade Anywhere, Anytime</h5>
            <p class="text-sm text-darkGrayishBlue">
              We understand the importance of creating a reliable and secure environment for you to make investments. That’s why we offer a range of options to suit your individual needs and goals
            </p>
          </div>
        </div>
      
      </div>
    </section>

    
     {/* <!-- Testimonials --> */}
     <section id="testimonials">
      {/* <!-- Container to heading and testm blocks --> */}
      <div class="max-w-6xl px-5 mx-auto mt-0 text-center">
        {/* <!-- Heading --> */}

        <h2 class="text-lg font-bold text-center text-[#E85631]">
          Get All Crypto Coin
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
            <div class="flex flex-row">
            {/* <img src="img/bitcoin_icon.svg" class="w-16 -mt-14" alt="" /> */}
            <img src="img/bitcoin_icon.svg"  alt="" />
            <h5 class="text-lg font-bold">Bitcoin</h5>
            </div>
            <p class="text-sm text-darkGrayishBlue">
              $571,44,834
            </p>
            <img src="img/bitcoin_icon1.svg" class="w-[191.03px] h-[24.53px] -mt-14" alt="" />
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <div class="flex flex-row">
            <img src="img/ethereum_icon.svg"  alt="" />
            <h5 class="text-lg font-bold">Ethereum</h5>
            </div>
            <p class="text-sm text-darkGrayishBlue">
              $571,44,834
            </p>
            <img src="img/ethereum_icon1.svg" class="w-[191.03px] h-[24.53px] -mt-14" alt="" />
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <div class="flex flex-row">
            <img src="img/monero_icon.svg" alt="" />
            <h5 class="text-lg font-bold">Monero</h5>
            </div>

            <p class="text-sm text-darkGrayishBlue">
              $571,44,834
            </p>
            <img src="img/monero_icon1.svg" class="w-[191.03px] h-[24.53px] -mt-14" alt="" />
          </div>

           {/* <!-- Testimonial 3 --> */}
           <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <div class="flex flex-row">
            <img src="img/litecoin_icon.svg" alt="" />
            <h5 class="text-lg font-bold">Litecoin</h5>
            </div>
            <p class="text-sm text-darkGrayishBlue">
              $571,44,834
            </p>
            <img src="img/litecoin_icon1.svg" class="w-[191.03px] h-[24.53px] -mt-14" alt="" />
          </div>
        </div>
      
      </div>
    </section>

    
     {/* <!-- Testimonials --> */}
     <section id="testimonials">
      {/* <!-- Container to heading and testm blocks --> */}
      <div class="max-w-6xl px-5 mx-auto mt-0 text-center">
        {/* <!-- Heading --> */}

        <h2 class="text-lg font-bold text-center text-[#E85631]">
          Get All Crypto Coin
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
            <div class="flex flex-row">
            {/* <img src="img/bitcoin_icon.svg" class="w-16 -mt-14" alt="" /> */}
            <img src="img/bitcoin_icon.svg"  alt="" />
            <h5 class="text-lg font-bold">Bitcoin</h5>
            </div>
            <p class="text-sm text-darkGrayishBlue">
              $571,44,834
            </p>
            <img src="img/bitcoin_icon1.svg" class="w-[191.03px] h-[24.53px] -mt-14" alt="" />
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <div class="flex flex-row">
            <img src="img/ethereum_icon.svg"  alt="" />
            <h5 class="text-lg font-bold">Ethereum</h5>
            </div>
            <p class="text-sm text-darkGrayishBlue">
              $571,44,834
            </p>
            <img src="img/ethereum_icon1.svg" class="w-[191.03px] h-[24.53px] -mt-14" alt="" />
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <div class="flex flex-row">
            <img src="img/monero_icon.svg" alt="" />
            <h5 class="text-lg font-bold">Monero</h5>
            </div>

            <p class="text-sm text-darkGrayishBlue">
              $571,44,834
            </p>
            <img src="img/monero_icon1.svg" class="w-[191.03px] h-[24.53px] -mt-14" alt="" />
          </div>

           {/* <!-- Testimonial 3 --> */}
           <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <div class="flex flex-row">
            <img src="img/litecoin_icon.svg" alt="" />
            <h5 class="text-lg font-bold">Litecoin</h5>
            </div>
            <p class="text-sm text-darkGrayishBlue">
              $571,44,834
            </p>
            <img src="img/litecoin_icon1.svg" class="w-[191.03px] h-[24.53px] -mt-14" alt="" />
          </div>
        </div>
      
      </div>
    </section>

    {/* <!-- CTA Section --> */}
    <section id="cta" class="bg-brightRed">
     
       <div
        class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0"
      >
     
        <h2
          class="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left"
        >
          Simplify how your team works today
        </h2>
    
        <div>
          <a
            href="#"
            class="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
            >Get Started</a
          >
        </div>
      </div> 
       {/* <!-- Container to heading and testm blocks --> */}
       
    </section>

    

  {/* <Footer/> */}
  <FooterResponsive/>



    </div>
  )
}

export default Homepage