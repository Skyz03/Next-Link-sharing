// RegisterPage.js
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation' // For Next.js 13+
import { supabase } from '../supabaseClient'
import Header from '../components/headers/Header'
import Register from './Register'

/**
 * @component RegisterPage
 * This component handles user authentication using Supabase. It manages:
 * - OAuth redirection and session handling.
 * - Google sign-in functionality.
 * - Redirect to the profile page after successful authentication.
 *
 * @returns {JSX.Element} The rendered registration page.
 */
export default function RegisterPage() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    /**
     * Handles the OAuth redirect by exchanging code in the URL for a session.
     * Redirects authenticated users to the profile page.
     * @async
     * @returns {Promise<void>}
     */
    const handleOAuthRedirect = async () => {
      try {
        const { data, error } = await supabase.auth.exchangeCodeForSession()
        if (error) {
          console.error('Error handling OAuth redirect:', error)
          return
        }
        if (data?.session?.user) {
          setUser(data.session.user)
          router.push('/profile')
        }
      } catch (error) {
        console.error('Unexpected error during OAuth redirect handling:', error)
      }
    }

    handleOAuthRedirect()

    /**
     * Subscribes to authentication state changes to automatically update user state.
     * Redirects to profile page when user is authenticated.
     */
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user ?? null)
        if (session?.user) {
          router.push('/profile')
        }
      },
    )

    // Cleanup: unsubscribe from auth listener on component unmount
    return () => {
      authListener?.subscription?.unsubscribe()
    }
  }, [router])

  /**
   * Initiates Google Sign-In using Supabase OAuth.
   * @async
   * @returns {Promise<void>}
   */
  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })
      if (error) throw error
    } catch (error) {
      console.error('Error logging in with Google:', error)
    }
  }

  /**
   * Logs out the user by clearing the Supabase session.
   * @async
   * @returns {Promise<void>}
   */
  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      setUser(null)
    } catch (error) {
      console.error('Error during sign out:', error)
    }
  }

  return (
    <div className="flex h-full w-full flex-col gap-5 bg-pureWhite p-6">
      <Header />
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <>
          <h1>Sign In</h1>
          <button onClick={handleGoogleSignIn}>Sign in with Google</button>
          <Register />
        </>
      )}
    </div>
  )
}
