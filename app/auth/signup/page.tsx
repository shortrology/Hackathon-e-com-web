"use client";

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    
    console.log('Signing up with email:', { email, password })
    
  }

  const handleGoogleSignUp = async () => {
    try {
      const res = await signIn('google', { callbackUrl: '/dashboard' })
      if (res?.error) {
        console.error('Error with Google sign-up:', res.error)
      }
    } catch (error) {
      console.error('Google sign-up failed:', error)
    }
  }

  return (
    <div className="max-w-md mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-4 bg-[#F9F9F9] w-full h-[56px] rounded-md border border-[#ddd] outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div>
          <input
            type="password"
            placeholder="Create a password"
            className="p-4 bg-[#F9F9F9] w-full h-[56px] rounded-md border border-[#ddd] outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full p-3 bg-[#4285F4] text-white rounded-md hover:bg-[#3d2b65] focus:outline-none"
        >
          Sign Up with Email
        </button>
      </form>

      <div className="flex items-center justify-center mt-6">
        <hr className="w-full border-t border-[#ddd]" />
        <p className="mx-4 text-sm text-gray-500">or</p>
      </div>

      <button
        onClick={handleGoogleSignUp}
        className="w-full mt-6 p-3 bg-[#4285F4] text-white rounded-md flex justify-center items-center hover:bg-[#3d2b65]"
      >
        <img src="/google-logo.svg" alt="" className="mr-3 w-5" />
        Sign Up with Google
      </button>

      <p className="text-center mt-6 text-sm">
        Already have an account?{' '}
        <a href="/auth/login" className="text-[#2A254B] font-semibold">Login</a>
      </p>
    </div>
  )
}

export default Signup

