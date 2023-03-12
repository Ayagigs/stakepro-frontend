export default function MobileSignup()  {
    return (
        <div className="relative flex flex-col justify-center min-h-max overflow-hidden">
             <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-[#FFFFFF] lg:max-w-xl">
              
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            FullName
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                  
                    <div className="mb-2">
                        <label
                            for="countryCode"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Country 
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            for="phone"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Number
                        </label>
                        <input
                            type="phone"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

      <label>
        <input type="checkbox"
        />
         I agree with the Terms and Conditions of Stakepro
       </label>
    
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#FF6842] rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Sign up
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}
