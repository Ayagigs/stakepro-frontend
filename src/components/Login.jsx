import React from "react"

export default function Login() {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-64 h-64 bg-gray-200">
            <div className="">
                <h1>Login into Account</h1>
            </div>
            <div className="">
                <div>
                    <h2>Email</h2>
                </div>
                <div>
                    <h2>Mobile</h2>
                </div>
            </div>
            <form className="">
                <div className="">
                    <label>Email address</label>
                    <input type="text"/>
                </div>
                <div className="">
                    <label>Password</label>
                    <input type="password"/>
                </div>
                <div className="">
                    <div className="">
                        <input type="checkbox"/>
                        <p>Remember me</p>
                    </div>
                    <div className="">
                        <a href="">Forgot Password?</a>
                    </div>
                </div>
                <button className="">Sign In</button>
            </form>
            <div className="">
                <div className="">
                    <p>Sign in with Google</p>
                </div>
                <div className="">
                    <p>Dont have an account? <a href="">Sign Up</a></p>
                </div>
            </div>
        </div>
      </div>
    )
  }