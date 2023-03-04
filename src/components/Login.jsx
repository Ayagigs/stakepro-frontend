import React from "react"
import { FiMail } from 'react-icons/fi'
import { AiOutlineEye } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { Link } from "react-router-dom"


export default function Login() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-[533px] sm:rounded-2xl bg-white shadow-2xl h-[650px] text-center ">
                    <div className="h-[80px] rounded-t-2xl flex justify-center items-center border-b border-gray-300">
                        <h1 className="text-3xl font-light">Login into Account</h1>
                    </div>
                    <div className="h-[80px] flex justify-between  items-center flex-row">
                        <div className=" h-[80px] w-[15rem] flex items-center justify-around text-xl font-normal">
                            <a href="" className="text-red-400 ">Email</a>
                            <a href="/mobile">Mobile</a>
                        </div>
                    </div>
                <div className="relative mt-4 text-left ">
                    <div className="h-[20rem] flex justify-between items-center flex-col ">
                        <div>
                            <label className="block font-light text-sm mb-2">Email address</label>
                            <div className="relative flex item-center justify-center">
                                <FiMail size="25" color="#9C9C9D" className="absolute pointer-events-none m-6 ml-96"/>
                                <input type="text" placeholder="example@belrah.com" className=" border w-[469px] h-[60px] px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-red-400 rounded-md" />
                            </div>
                            
                        </div>
                        <div>
                            <label className="block font-light text-sm">Password</label>
                            
                            <div className="relative flex item-center justify-center" >
                                <AiOutlineEye size="28" color="#9C9C9D" className="absolute pointer-events-none m-6 ml-96" />
                                <input type="password" placeholder="**********" className=" border w-[469px] h-[60px] px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-red-400 rounded-md"/>
                            </div>
                        </div>
                    <div/>
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
                </div>
                    <div className="bg-white-100 h-[150px] rounded-2xl flex items-center justify-center flex-col">
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