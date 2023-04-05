import React from "react";
import percon_icon from '../assets/admin_pic.svg';

export default function DashboardTopNavbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between 
     px-5 py-3 bg-[#FFFFFF] mb-3 shadow  ">
 
            <a href class="flex flex-row items-center">
             
              <span class="flex flex-col ml-2 text-[24px]">
                <span>Welcome Back <span class="text-[#E85631]">Belrah</span></span>
              </span>
            </a>

          <div class="flex ml-auto">

                <form class="flex items-center mr-10">   
                    <label for="voice-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2432_27283)">
                                <path d="M10.9565 20C16.4794 20 20.9565 15.5228 20.9565 10C20.9565 4.47715 16.4794 0 10.9565 0C5.4337 0 0.956543 4.47715 0.956543 10C0.956543 15.5228 5.4337 20 10.9565 20Z" fill="#FF6842"/>
                                <path d="M15.3515 8.7625C15.5478 7.4525 14.5497 6.74813 13.1859 6.27813L13.6284 4.50312L12.5484 4.23438L12.1172 5.9625C11.8334 5.89125 11.5422 5.825 11.2515 5.75875L11.6859 4.01938L10.6059 3.75L10.1634 5.52437C9.92842 5.47062 9.69717 5.41813 9.47342 5.36188L9.47467 5.35625L7.98467 4.98437L7.69717 6.13813C7.69717 6.13813 8.49904 6.32188 8.48217 6.33313C8.91967 6.4425 8.99842 6.73187 8.98529 6.96187L8.48154 8.98375C8.51154 8.99125 8.55029 9.0025 8.59404 9.01937L8.47967 8.99125L7.77342 11.8237C7.71967 11.9562 7.58404 12.1556 7.27779 12.08C7.28904 12.0956 6.49279 11.8844 6.49279 11.8844L5.95654 13.1206L7.36279 13.4713C7.62404 13.5369 7.88029 13.6056 8.13217 13.67L7.68529 15.465L8.76467 15.7337L9.20717 13.9587C9.50217 14.0381 9.78842 14.1119 10.0684 14.1819L9.62717 15.9494L10.7072 16.2181L11.154 14.4269C12.9965 14.7756 14.3815 14.635 14.9647 12.9688C15.4347 11.6275 14.9415 10.8531 13.9722 10.3488C14.6784 10.1863 15.2097 9.72188 15.3515 8.7625V8.7625ZM12.8828 12.2238C12.5497 13.5656 10.2903 12.84 9.55779 12.6581L10.1515 10.28C10.884 10.4631 13.2322 10.825 12.8828 12.2238ZM13.2172 8.74313C12.9128 9.96375 11.0328 9.34313 10.4234 9.19125L10.9609 7.035C11.5703 7.18687 13.5347 7.47 13.2172 8.74313Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2432_27283">
                                <rect width="20" height="20" fill="white" transform="translate(0.956543)"/>
                                </clipPath>
                                </defs>
                                </svg>

                        </div>
                        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                        focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 
                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                        dark:focus:border-blue-500" placeholder="BTC" required/>
                        <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        <span class="text-transparent"></span>
                        </button>
                    </div>
                </form> 



                <label class="relative inline-flex items-center cursor-pointer m-auto">
            <input type="checkbox" value="" class="sr-only peer"/>
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>

                    
        <div class="flex space-x-4 m-auto pl-10">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.95654 22H15.9565C20.9565 22 22.9565 20 22.9565 15V9C22.9565 4 20.9565 2 15.9565 2H9.95654C4.95654 2 2.95654 4 2.95654 9V15C2.95654 20 4.95654 22 9.95654 22Z" stroke="#5B5B5C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.0566 11.9995V10.5195C10.0566 8.6095 11.4066 7.8395 13.0566 8.7895L14.3366 9.5295L15.6166 10.2695C17.2666 11.2195 17.2666 12.7795 15.6166 13.7295L14.3366 14.4695L13.0566 15.2095C11.4066 16.1595 10.0566 15.3795 10.0566 13.4795V11.9995Z" stroke="#5B5B5C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.08154 11.334L12.3009 16.8136C13.0007 17.2801 13.9124 17.2801 14.6122 16.8136L22.8315 11.334M6.16488 22.7923H20.7482C21.8988 22.7923 22.8315 21.8596 22.8315 20.709V10.2923C22.8315 9.14172 21.8988 8.20898 20.7482 8.20898H6.16488C5.01428 8.20898 4.08154 9.14172 4.08154 10.2923V20.709C4.08154 21.8596 5.01428 22.7923 6.16488 22.7923Z" stroke="#3F3F46" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="22.4565" cy="9.5" r="8.5" fill="#FF6842"/>
            <path d="M19.6808 13V11.867L21.9028 9.546C22.3428 9.084 22.6801 8.71733 22.9148 8.446C23.1568 8.16733 23.3255 7.929 23.4208 7.731C23.5161 7.533 23.5638 7.33133 23.5638 7.126C23.5638 6.78133 23.4538 6.51 23.2338 6.312C23.0211 6.114 22.7461 6.015 22.4088 6.015C22.0568 6.015 21.7525 6.11767 21.4958 6.323C21.2391 6.521 21.0521 6.81433 20.9348 7.203L19.6258 6.796C19.7138 6.36333 19.8935 5.98933 20.1648 5.674C20.4361 5.35133 20.7661 5.10567 21.1548 4.937C21.5508 4.761 21.9688 4.673 22.4088 4.673C22.9368 4.673 23.3988 4.76833 23.7948 4.959C24.1981 5.14967 24.5098 5.41733 24.7298 5.762C24.9571 6.10667 25.0708 6.51 25.0708 6.972C25.0708 7.26533 25.0158 7.555 24.9058 7.841C24.7958 8.127 24.6308 8.42033 24.4108 8.721C24.1908 9.01433 23.9048 9.34433 23.5528 9.711L21.6278 11.735H25.1808V13H19.6808Z" fill="white"/>
            </svg>

            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9766 2.91016C9.66663 2.91016 6.97663 5.60016 6.97663 8.91016V11.8002C6.97663 12.4102 6.71663 13.3402 6.40663 13.8602L5.25663 15.7702C4.54663 16.9502 5.03663 18.2602 6.33663 18.7002C10.6466 20.1402 15.2966 20.1402 19.6066 18.7002C20.8166 18.3002 21.3466 16.8702 20.6866 15.7702L19.5366 13.8602C19.2366 13.3402 18.9766 12.4102 18.9766 11.8002V8.91016C18.9766 5.61016 16.2766 2.91016 12.9766 2.91016Z" stroke="#404143" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M14.8265 3.19945C14.5165 3.10945 14.1965 3.03945 13.8665 2.99945C12.9065 2.87945 11.9865 2.94945 11.1265 3.19945C11.4165 2.45945 12.1365 1.93945 12.9765 1.93945C13.8165 1.93945 14.5365 2.45945 14.8265 3.19945Z" stroke="#404143" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.9766 19.0605C15.9766 20.7105 14.6266 22.0605 12.9766 22.0605C12.1566 22.0605 11.3966 21.7205 10.8566 21.1805C10.3166 20.6405 9.97656 19.8805 9.97656 19.0605" stroke="#404143" stroke-width="1.5" stroke-miterlimit="10"/>
            </svg>

   </div>


          <a href class="flex flex-row items-center ml-10">
             <img
                className="h-8 w-auto sm:h-10"
                src={percon_icon} alt='logo'
            />
        </a>

          </div>

</nav>



    // </>
  );
}