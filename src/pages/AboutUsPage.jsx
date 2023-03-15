import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function AboutUsPage() {
  return (
    <div>
      <Navbar/>
     
      <section id="cta1" class="bg-neutral-100  bg-[url('../img/about.svg')] h-[29.75rem] " > 

        <div
        class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12  md:py-12 md:flex-col md:space-y-10"
      >
        <h2
          // class="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left"
          class="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-full md:text-left"
        >
          {/* Simplify how your team works today */}
          About Us
        </h2>

        <h6
          class="text-sm font-bold leading-tight text-center text-white md:text-sm md:max-w-full md:text-left"
        >
          Know more about our Platform, our Mission, our Vision, Our 
          <br></br>Strategy as well as our Partners. You can trust us!
        </h6> 
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

        {/* class="bg-brightRed  bg-[url('../img/about.svg')] h-[29.75rem]" */}
        <div class="flex flex-col space-y-12 md:w-1/2">
          <div  class="bg-brightRed  bg-[url('../img/about_section1.svg')] h-[20rem]">
          {/* <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p> */}
          </div>

          <div  class="bg-brightRed  bg-[url('../img/about_section2.svg')] h-[20rem]">
          {/* <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2> */}
          {/* <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p> */}
          </div>
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
                {/* <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  01
                </div> */}
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Let <span class="tet-[#E85631]">Tomorrow</span> begin <span class="tet-[#E85631]">today.</span>
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Let <span class="text-[#E85631]">Tomorrow </span>begin <span class="text-[#E85631]">today.</span>
              </h3>
              <p class="text-darkGrayishBlue">
              The world is advancing there is increasing need to invest 
              in the ever-growing cryptocurrency space, to avoid being left 
              out and losing great opportunities, therefore let your tomorrow 
              begin today. Learn, Trade and Stake on StakePro!
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
                {/* <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  02
                </div> */}
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Our Mission
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Our Mission
              </h3>
              <p class="text-darkGrayishBlue">
              We aim to elevate poverty by creating a platform where individuals can engage 
              and make money from. A platform that is secured, tested and trusted by professional 
              cryptocurrency users around the world.
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
                {/* <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  02
                </div> */}
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Our Vision
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Our Vision
              </h3>
              <p class="text-darkGrayishBlue">
                To provide a way for individuals to make money on the cryptocurrency space 
                by staking and trading coins. To educate the beginners about terms, processes 
                and transactions carried out in the crypto space.
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
                {/* <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  03
                </div> */}
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Our Strategy
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Our Strategy
              </h3>
              <p class="text-darkGrayishBlue">
                We have created a cryptocurrency staking platform, where users can stake coins 
                and get rewards. users can also trade and have access to their wallet, send and 
                receive crypto from external sources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section id="cta" class="bg-[#022738]">
      {/* <!-- Flex Container --> */}
        <div class="max-w-6xl px-5 mx-auto mt-32 text-center h-[228px]">
      
        {/* <!-- Testimonials Container --> */}
        <div class="flex flex-col mt-24 md:flex-row md:space-x-6 pt-14">
          {/* <!-- Testimonial 1 --> */}
          <div
            class="flex flex-row items-center p-6 space-y-6 rounded-lg bg-[#022738] md:w-1/3"
          >
            <img src="img/profile_user.svg" class="w-16 -mt-14" alt="" />
            <div  class="flex flex-col">
            <h5 class="text-lg font-bold text-[#FFFFFF]">800</h5>
            <p class="text-sm text-[#FFFFFF]">
              Active users
            </p>
            </div>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div
            class="hidden flex-row items-center p-6 space-y-6 rounded-lg bg-[#022738] md:flex md:w-1/3"
          >
            <img src="img/coin_about.svg" class="w-16 -mt-14" alt="" />
            <div  class="flex flex-col">
            <h5 class="text-lg font-bold text-[#FFFFFF]">25K</h5>
            <p class="text-sm text-[#FFFFFF]">
              Crypto staked
            </p>
            </div>
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div
            class="hidden flex-row items-center p-6 space-y-6 rounded-lg bg-[#022738] md:flex md:w-1/3"
          >
            <img src="img/ranking_about.svg" class="w-16 -mt-14" alt="" />
            <div  class="flex flex-col">
            <h5 class="text-lg font-bold text-[#FFFFFF]">20</h5>
            <p class="text-sm text-[#FFFFFF]">
              Awards winning
            </p>
            </div>
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div
            class="hidden flex-row items-center p-6 space-y-6 rounded-lg bg-[#022738] md:flex md:w-1/3"
          >
            <img src="img/medal_about.svg" class="w-16 -mt-14" alt="" />
            <div  class="flex flex-col">
            <h5 class="text-lg font-bold text-[#FFFFFF]">25</h5>
            <p class="text-sm text-[#FFFFFF]">
              Years of Experience              
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

export default AboutUsPage
