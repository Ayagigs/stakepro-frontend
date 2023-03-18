import Tabs from "./Tab";

export default function SignUp()  {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl box-shadow: 0px 3px 5px box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2) ring-2 ring-[#FFFFFF] lg:max-w-xl"> 
                <h1 className="text-3xl font-semibold text-center text-[#1D1D1E] no-underline normal decoration-none">
                    Create an Account
                </h1>
               
                <Tabs /> 
               
                <div class="my-5">
                    <button class="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img src="https://www.svgrepo.com/show/355037/google.svg" class="w-6 h-6" alt=""/> <span>Login with Google</span>
                    </button>
                    </div>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Sign in
                    </a>
                </p>
                </div>  
            
        </div>
    );
}
