"use client";

  import React, { useState } from 'react'

  const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const handleSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault()
      // Logic for logging in the user
      console.log('Logging in:', { email, password })
    }
  
    return (
      <div className="max-w-md mx-auto my-8 p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-4 bg-[#F9F9F9] w-full h-[56px] outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              className="p-4 bg-[#F9F9F9] w-full h-[56px] outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-[#2A254B] text-white h-[56px] mt-4"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account? <a href="/auth/signup" className="text-[#3c1c85]">Sign Up</a>
        </p>
      </div>
    )
  }
  
  export default Login
  
