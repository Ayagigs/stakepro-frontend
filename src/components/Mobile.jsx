import React from "react"
import { BsFillTelephoneFill } from 'react-icons/bs'

export default function Mobile() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-[533px] sm:rounded-2xl  shadow-2xl h-[650px] text-center ">
                <div className="h-[80px] rounded-t-2xl flex justify-center items-center border-b border-gray-300">
                    <h1 className="text-3xl font-light">Login into Account</h1>
                </div>
                <div className="h-[80px] flex justify-between  items-center flex-row ">
                    <div className=" h-[80px] w-[15rem] flex items-center justify-around text-xl font-normal">
                        <a href="/login" className="">Email</a>
                        <a href="" className="text-red-400 ">Mobile</a>
                    </div>
                </div>
                <div className=" flex items-center justify-center flex-col h-[400px] bg-green-600">
                    <div className=" flex items-center justify-evenly w-[100%] flex-row h-max">
                        <div className="flex items-center justify-center flex-col">
                            <label htmlFor="">Country</label>
                            <select name="Numbers" id="" className="h-[50px] w-[100px] text-center rounded-md text-[#9C9C9D]  focus:outline-none focus:ring-1 focus:ring-red-400 ">
                                <option value="" className="border-gray-700">+234</option>
                                <option value="">+1</option>
                                <option value="">+86</option>
                                <option value="">+233</option>
                                <option value="">44</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <label htmlFor="">Number</label>
                            <div>
                                <BsFillTelephoneFill size="25" color="#BDBDBE" className="absolute pointer-events-none m-6 ml-[250px]"/>
                                <input type="text" placeholder="81********" className=" border w-[300px] h-[60px] px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-red-400 rounded-md " color="#9C9C9D"/>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>
                
            </div>
        </div>

    )
}        