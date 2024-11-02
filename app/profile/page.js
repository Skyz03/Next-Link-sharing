// ProfileDetails.js
'use client'

import { useState, useEffect, useCallback } from 'react'
import InsideHeader from '../components/headers/InsideHeader'
import { Button } from 'primereact/button'
import Image from 'next/image'
import { supabase } from '../supabaseClient'

/**
 * ProfileDetails component for displaying and editing user profile information.
 * Fetches user data from Google OAuth or local storage and allows image uploads and form editing.
 *
 * @component
 */
export default function ProfileDetails() {
  // State to manage profile information
  const [profileImage, setProfileImage] = useState(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  /**
   * Fetches user profile from Supabase if authenticated; otherwise, loads data from localStorage.
   * Updates state with fetched or stored data.
   */
  useEffect(() => {
    const fetchUserProfile = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (session) {
        const user = session.user
        setEmail(user.email || '')

        // Assuming the user's name is stored as 'full_name' in Google OAuth data
        const [first, last] = (user.user_metadata.full_name || '').split(' ')
        setFirstName(first || '')
        setLastName(last || '')

        // Retrieve Google profile image if available
        setProfileImage(user.user_metadata.avatar_url || null)
      } else {
        // If no session is found, load data from localStorage
        setFirstName(localStorage.getItem('firstName') || '')
        setLastName(localStorage.getItem('lastName') || '')
        setEmail(localStorage.getItem('email') || '')
        setProfileImage(localStorage.getItem('profileImage') || null)
      }
    }

    fetchUserProfile()
  }, [])

  /**
   * Handles image file upload and updates profile image state.
   *
   * @param {Event} e - File input change event.
   */
  const handleImageUpload = useCallback((e) => {
    const file = e.target.files[0]
    if (file) {
      const imageURL = URL.createObjectURL(file)
      setProfileImage(imageURL)
    }
  }, [])

  /**
   * Saves profile data to localStorage.
   * @return {void}
   */
  const handleSave = useCallback(() => {
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
    localStorage.setItem('email', email)
    localStorage.setItem('profileImage', profileImage)
    console.log('Data saved to localStorage:', {
      firstName,
      lastName,
      email,
      profileImage,
    })
  }, [firstName, lastName, email, profileImage])

  return (
    <>
      <InsideHeader />

      <div className="p-4 text-slateBlack">
        <div className="mt-4 bg-pureWhite p-4 text-slateBlack">
          <h1 className="text-2xl font-bold">Profile Details</h1>
          <p className="mt-2 text-midGray">
            Add your details to create a personal touch to your profile.
          </p>

          <div className="mt-6 rounded-md bg-offWhite p-4 text-slateBlack">
            <p className="text-lg text-midGray">Profile Picture</p>
            <div className="relative mt-4 text-primary">
              <label
                htmlFor="profileImage"
                className="relative flex h-[195px] w-[195px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-gray-300 bg-primaryLighter"
              >
                {profileImage ? (
                  <>
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <div className="flex flex-col items-center text-center text-white">
                        <Image
                          src="/assets/images/icon-upload-image-white.svg"
                          alt="Upload Icon"
                          width={35}
                          height={35}
                          className="text-white"
                        />
                        <p className="mt-2 text-sm">Change Image</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/assets/images/icon-upload-image.svg"
                      alt="Upload Icon"
                      width={35}
                      height={35}
                    />
                    <p className="mt-2 text-sm text-primary">+ Upload Image</p>
                  </div>
                )}
              </label>
              <input
                type="file"
                id="profileImage"
                className="hidden"
                accept="image/png, image/jpeg"
                onChange={handleImageUpload}
              />
            </div>
            <p className="mt-2 text-sm text-midGray">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </p>
          </div>

          <div className="mt-6 rounded-md bg-offWhite p-4 text-slateBlack">
            <div className="mt-4">
              <label className="block text-sm text-slateBlack">
                First Name*
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-md border border-gray-300 p-4 text-slateBlack"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm text-slateBlack">
                Last Name*
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-md border border-gray-300 p-4 text-slateBlack"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm text-slateBlack">Email</label>
              <input
                type="email"
                className="mt-2 w-full rounded-md border border-gray-300 p-4 text-slateBlack"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 p-4">
          <Button label="Save" className="btn-primary" onClick={handleSave} />
        </div>
      </div>
    </>
  )
}
