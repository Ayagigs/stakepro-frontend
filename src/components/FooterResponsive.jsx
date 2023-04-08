import React from 'react'

function FooterResponsive() {
  return (
    <div>
      
      <footer class="px-3 pt-4 lg:px-9 border-t-2 bg-[#EFFAFF]">
    <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

        <div class="sm:col-span-2">

        <div class="flex flex-col items-start mb-6">
            <h2
            class="text-5xl font-bold leading-tight text-center text-black md:text-4xl md:max-w-xl md:text-left"
            >
            News letter
            </h2>
            <p>Be the first one to know  about discounts, offers and events</p>
        </div>

            <div>
            <img src="img/logo_footer.svg" class="h-8" alt="" />
          </div>

            <div class="mt-6 lg:max-w-xl">
                <p class="text-sm text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in 
                volutpat ullamcorper amet adipiscing fermentum.. 
                    </p>
            </div>


            <ul class="flex justify-start space-x-4 mt-10">
                <li href="#">
                    <img src="img/linkedIn_footer.svg" alt="" class="h-8" />
                </li>
            
                <li href="#">
                    <img src="img/google_footer.svg" alt="" class="h-8" />
                </li>
                
                <li href="#">
                    <img src="img/facebook_footer.svg" alt="" class="h-8" />
                </li>
        
                <li href="#">
                    <img src="img/instagram_footer.svg" alt="" class="h-8" />
                </li>
                <li href="#">
                    <img src="img/twitter_footer.svg" alt="" class="h-8" />
                </li>
            </ul>

        </div>


        <div class="flex flex-row space-x-20 mt-20 gap-2 text-sm">

        <div class="flex flex-col gap-2 text-sm">
            <p class="text-base font-bold tracking-wide text-gray-900">Company</p>
            <a href="#">About</a>
            <a href="#">Legal</a>
            <a href="#">FAQs</a>
            <a href="#">Prices</a>
        </div>

        <div class="flex flex-col gap-2 text-sm">
            <p class="text-base font-bold tracking-wide text-gray-900">Resources</p>
            <a href="#">Blog</a>
            <a href="#">Videos</a>
            <a href="#">Tutorials</a>
            <a href="#">Events and News</a>
        </div>
        </div>
        

        <div>
            <div class="flex flex-col justify-between">
            {/* <form>
                <div class="flex space-x-3">
                
                <div 
                class="w-2/3 flex justify-start items-center relative w-full"
                > 
                    <input
                    placeholder="Enter your email"
                    class="border border-[#FF6842]  p-2 pl-10 w-full bg-[#FF6842] placeholder-[white]"
                    />
                    <img src="img/email_footerIcon.svg" class="absolute mr-2 w-10" alt="Search Icon" />
                </div>

        

               
                </div>
            </form> */}



                        
            <form>   
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <img src="img/email_footerIcon.svg" class="absolute mr-2 w-10" alt="Search Icon" />
                    </div>
                    
                    <input type="search" id="default-search" class="block w-full 
                    p-4 pl-10 text-sm text-gray-900 border border-gray-300 
                     bg-[#FF6842] placeholder-[white] focus:ring-blue-500 focus:border-blue-500
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                     placeholder="Enter your email" required/>
                    <button type="submit" class="text-[#FF6842] absolute right-2.5 bottom-2.5 
                    bg-[#FFFFFF] hover:bg-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300
                     font-medium  text-sm px-10 py-2 dark:bg-[#FFFFFF] dark:hover:bg-[#FFFFFF]
                     dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>

            </div> 

            



            {/* <p class="text-base font-bold tracking-wide text-gray-900">COMPANY IS ALSO AVAILABLE ON</p> */}
            <div class="flex items-center gap-1 mt-9 px-2">
                 <a href="#" class="w-full min-w-xl">
                    <div class="flex flex-col gap-2 text-sm">
                        <p class="text-base font-bold tracking-wide text-gray-900">Help</p>
                        <a href="#">Expects</a>
                        <a href="#">Contact</a>
                        <a href="#">Community</a>
                        <a href="#">Support Center</a>
                    </div>
                </a> 
                

                <a class="w-full min-w-xl">
                    <div class="flex flex-col gap-2 text-sm">
                        <p class="text-base font-bold tracking-wide text-gray-900">Trade</p>
                        <a href="#">Buy & Sell</a>
                        <a href="#">Stake coin</a>
                        <a href="#">Market Place</a>
                        <a href="#">Check Rewards</a>
                    </div>
                </a> 
            </div>
            {/* <p class="text-base font-bold tracking-wide text-gray-900">Contacts</p> */}
            <div class="flex">
                {/* <p class="mr-1 text-gray-800">Email:</p>
                <a href="#" title="send email">admin@company.com</a> */}
            </div>
        </div>

    </div>

    <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p class="text-sm text-gray-600">© Copyright 2023 Company. All rights reserved Stakepro.</p>
        <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
                <a href="#"
                    class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                    &amp; Cookies Policy
                </a>
            </li>
            <li>
                <a href="#"
                    class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
                </a>
            </li>
        </ul>
    </div>

</footer>

    </div>
  )
}

export default FooterResponsive
