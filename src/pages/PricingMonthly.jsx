import React from 'react'
import logo from '../assets/under_contruction.jpg';
// import Footer from '../components/Footer';
import NavbarResponsive from '../components/NavbarResponsive';
import FooterResponsive from '../components/FooterResponsive';

function PricingMonthly() {
  return (
    <div>
      <NavbarResponsive/>
     
      <section id="cta1" class="bg-brightRed  bg-[url('../img/pricing_image.svg')] h-[29.75rem]">
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
          {/* Pricing */}
        </h2>
        {/* <!-- Button --> */}

       

      
      </div>
    </section>


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



     <FooterResponsive/>
    </div>
  )
}

export default PricingMonthly
