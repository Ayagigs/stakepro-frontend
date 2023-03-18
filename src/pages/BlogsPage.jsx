import React from 'react'
import Navbar from '../components/Navbar'
import logo from '../assets/under_contruction.jpg';
import Footer from '../components/Footer';

function BlogsPage() {
  return (
    <div>
      <Navbar/>

      <section id="cta1" class="bg-brightRed  bg-[url('../img/our_blog.svg')] h-[29.75rem]">
      {/* <!-- Flex Container --> */}
      
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



      <Footer/>
    </div>
  )
}

export default BlogsPage
