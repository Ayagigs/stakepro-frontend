import React from "react"
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

export default function Mobile() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-[533px] sm:rounded-2xl  shadow-2xl h-[650px] text-center ">
                <div className="h-[80px] rounded-t-2xl flex justify-center items-center border-b border-gray-300">
                    <h1 className="text-3xl font-light">Login into Account</h1>
                </div>
                <div className="h-[80px] flex justify-between  items-center flex-row ">
                    <div className=" h-[80px] w-[15rem] flex items-center justify-around text-xl font-normal">
                        <a href="/" className="">Email</a>
                        <a href="" className="text-red-400 ">Mobile</a>
                    </div>
                </div>
                <div className=" flex items-center justify-between flex-col h-[350px] ">
                    <div className=" flex items-center justify-evenly w-[100%] flex-row">
                        <div className="flex items-center justify-center flex-col">
                            <label htmlFor="" className="block font-light text-sm mr-[8px] mb-[13px]">Country Code</label>
                            <select name="Numbers" id="" className="h-[50px] w-[100px] text-center rounded-md text-[#9C9C9D]  focus:outline-none focus:ring-1 focus:ring-red-400 ">
                                <option value="" className="border-gray-700">+234</option>
                                <option value="">+1</option>
                                <option value="">+86</option>
                                <option value="">+233</option>
                                <option value="">44</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <label htmlFor="" className="block font-light text-sm mr-[280px]">Number</label>
                            <div>
                                <BsFillTelephoneFill size="25" color="#BDBDBE" className="absolute pointer-events-none m-6 ml-[280px]"/>
                                <input type="text" placeholder="81********" className=" border w-[330px] h-[60px] px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-red-400 rounded-md " color="#9C9C9D"/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="  w[100%]">
                        <label htmlFor="" className="block font-light text-sm mr-[410px]">Password</label>
                        <div className="relative flex item-center justify-center" >
                            <AiOutlineEye size="28" color="#9C9C9D" className="absolute pointer-events-none m-6 ml-[420px]" />
                            <input type="password" placeholder="**********" className=" border w-[469px] h-[60px] px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-red-400 rounded-md"/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center flex-row w-[469px]">
                        <div className=" w-[8rem] flex justify-evenly items-center">
                            <input type="checkbox" className="h-[30px] w-[18px] "/>
                            <label className="block font-light text-sm">Remember me</label>
                        </div>
                        <div className="font-light text-sm"> 
                            <a href="">Forgot Password?</a>
                        </div>
                    </div>  
                    <button className="h-[56px] w-[469px] bg-red-400 text-white text-xl rounded-md">Sign In</button>  
                </div>
                <div className="bg-white-100 h-[120px] rounded-2xl flex items-center justify-center flex-col">
                        <div className="flex items-center justify-center h-[70px] w-max">
                            <FcGoogle size="25" className="mr-3"/>
                            <p className="text-base font-semibold">Sign in with Google</p>
                        </div>
                        <div className="h-[56px] w-max flex items-center justify-center">
                            <p className="text-sm font-normal text-[#71717A]">Dont have an account? <a href="" className="text-red-400">Sign Up</a></p>
                        </div>
                    </div>
            </div>
        </div>

    )
}        