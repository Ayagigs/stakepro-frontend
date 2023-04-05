import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import home_section1 from '../pages/home_section1';
import logo from '../assets/under_contruction.jpg';
import home_svg from '../assets/home.svg';
import './home.css';
import Footer from './Footer';

{/* <link rel="stylesheet" href="css/main.css" /> */}


function Homepage(props) {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar/>

      <section id="cta1" class="flex flex-row bg-[#022738]  h-[29.75rem]">
     
     <div
       class="container flex flex-col items-start w-[50%] text-start justify-between px-6 py-24 mx-auto space-y-12  md:py-12 
       md:flex-col md:space-y-10"
     >
       {/* <!-- Heading --> */}
       <h2
         // class="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left"
         class="text-5xl font-bold leading-tight text-start text-white md:text-4xl md:max-w-full md:text-left"
       >
         {/* Simplify how your team works today */}
         Make <span class="text-[#FF6842]">Profit</span> and Get <br></br> <span class="text-[#FF6842]">Rewarding</span> Returns on<br></br> Crypto Investment
       </h2>
       {/* <!-- Button --> */}

       <h6
         class="text-[18px] font-normal leading-tight text-start text-white md:text-sm md:max-w-full md:text-start"
       >
        Our secured platform is designed to make crypto trading easy and accessible, no matter where you are 
        located. With just a few clicks, you can deposit money with mobile money, buy crypto, and start trading. 
        You can also use mobile money to withdraw your profits.
       </h6> 

       {/* <div> */}
         <a
           href="#"
           class="p-3 px-6 pt-2 text-white bg-[#FF6842] rounded-[2%] shadow-2xl baseline hover:bg-gray-900"
           >Start Staking</a
         >
       {/* </div> */}
     </div>

     {/* <div
       class="container bg-brightRed w-[50%]  bg-[url('../img/community.svg')] h-[29.75rem]"
     >
       
     </div> */}
     <div
       class="container bg-[#022738] h-[29.75rem] w-[50%]"
     >
       <div class="container bg-[#022738] w-[614px] m-10 bg-[url('../img/home.svg')] h-[369px]"></div>
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

<section class="overflow-hidden text-neutral-700">
  <div class="flex flex-row">
  {/* <div> */}
  <div class="mx-auto px-0 py-2 lg:px-0 lg:pt-12">
    <ul>
      <li>Give Crypto Trading Classes</li>
      <li>One on One Couching Sections</li>
      <li>Identify your Ideal Coins</li>
      <li>Advice and Recommendations</li>
      <li>Trend Recommendations</li>
      <li>Develop Better Investment Strategies</li>
    </ul>
  </div>
  {/* <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12"> */}
  <div class="container mx-auto px-0 py-2 lg:px-0 lg:pt-12">
    <div class="-m-1 flex flex-wrap md:-m-2">
      <div class="flex w-1/2 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
             />
        </div>
      </div>
      <div class="flex w-1/2 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
        </div>
      </div>
      <div class="flex w-1/3 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
        </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>


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

    

  <Footer/>



    </div>
  )
}

export default Homepage