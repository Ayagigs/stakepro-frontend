import Tabs from "./Tab";

export default function SignUp()  {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            {/* <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">  */}
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2) ring-2 ring-indigo-600 lg:max-w-xl"> 
                <h1 className="text-3xl font-semibold text-center text-indigo-700 no-underline normal decoration-none">
                    Create an Account
                </h1>
               
                <Tabs /> 

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
