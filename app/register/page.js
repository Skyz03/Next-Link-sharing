// RegisterPage.js
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../supabaseClient'
import Header from '../components/headers/Header'
import Register from './Register'
import { useAuth } from '../context/authContext'
import Link from 'next/link'

export default function RegisterPage() {
  const { user, signOut } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { usePKCE: true },
      })
      if (error) throw error
    } catch (error) {
      console.error('Error logging in with Google:', error.message)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp({
        email: 'lagaj70275@gmail.com',
        password: '123213',
        options: {
          emailRedirectTo: `${window.location.origin}/welcome`, // Adjust the redirection URL as needed
        },
      })
      if (error) throw error
    } catch (error) {
      console.error('Error during registration:', error.message)
    }
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target
    if (id === 'email') setEmail(value)
    if (id === 'password') setPassword(value)
  }

  if (user) {
    return (
      <div className="flex h-full w-full flex-col gap-5 bg-pureWhite p-6">
        <Header />
        <div>
          <h2>Welcome, {user.email}</h2>
          <button onClick={signOut} className="button">
            Sign Out
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col gap-5 bg-pureWhite p-6">
      <Header />
      <div>
        <Register
          onRegisterClick={handleRegister}
          onInputChange={handleInputChange}
          email={email}
          password={password}
        />
        <div className="px-4">
          <button onClick={handleGoogleSignIn} className="google-btn">
            <img
              src="/assets/images/icon-google.png"
              alt="Google Logo"
              className="mr-2 h-5"
            />
            Sign in with Google
          </button>
        </div>
      </div>
      <div className="p-mt-3 flex flex-col items-center gap-1">
        <p>Already have an account?</p>
        <Link href="/login" className="text-primary">
          Login
        </Link>
      </div>
    </div>
  )
}
