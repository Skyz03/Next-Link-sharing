'use client'

import { useState, useEffect } from 'react'
import InsideHeader from '../components/headers/InsideHeader'
import { Button } from 'primereact/button'
import Image from 'next/image'

export default function ProfileDetails() {
  // State to manage form inputs
  const [profileImage, setProfileImage] = useState(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  // Retrieve saved data from localStorage on page load
  useEffect(() => {
    const savedFirstName = localStorage.getItem('firstName')
    const savedLastName = localStorage.getItem('lastName')
    const savedEmail = localStorage.getItem('email')
    const savedProfileImage = localStorage.getItem('profileImage')

    if (savedFirstName) setFirstName(savedFirstName)
    if (savedLastName) setLastName(savedLastName)
    if (savedEmail) setEmail(savedEmail)
    if (savedProfileImage) setProfileImage(savedProfileImage)
  }, [])

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageURL = URL.createObjectURL(file)
      setProfileImage(imageURL)
    }
  }

  // Handle form submission and save data to localStorage
  const handleSave = () => {
    // Save data to localStorage
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
  }

  return (
    <div className="p-4 text-slateBlack">
      {/* InsideHeader for page consistency */}
      <InsideHeader />

      {/* Page title and description */}
      <div className="mt-4 bg-white p-4 text-slateBlack shadow">
        <h1 className="text-2xl font-bold">Profile Details</h1>
        <p className="mt-2">
          Add your details to create a personal touch to your profile.
        </p>
      </div>

      {/* Profile Picture Section */}
      <div className="mt-6 rounded-md bg-lightGray p-4 shadow-md text-slateBlack">
        <h2 className="text-xl font-bold">Profile Picture</h2>
        <div className="relative mt-4 text-primary">
          <label
            htmlFor="profileImage"
            className="relative flex h-32 w-32 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-gray-300 bg-primaryLighter"
          >
            {/* Show uploaded image or placeholder */}
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/assets/images/icon-upload-image.svg"
                  alt="Upload Icon"
                  width={35}
                  height={35}
                />
                <p className="text-sm font-bold text-primary">+ Upload Image</p>
              </div>
            )}

            {/* Overlay to change the image */}
            {profileImage && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="flex flex-col items-center text-center text-white">
                  <Image
                    src="/assets/images/icon-upload-image.svg"
                    alt="Upload Icon"
                    width={35}
                    height={35}
                    className="text-white"
                  />
                  <p className="text-sm font-bold">Change Image</p>
                </div>
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

      {/* Personal Information Section */}
      <div className="mt-6 rounded-md bg-lightGray p-4 shadow-md text-slateBlack">
        <div className="mt-4">
          <label className="block text-sm font-semibold text-slateBlack">
            First Name*
          </label>
          <input
            type="text"
            className="mt-2 w-full rounded-md border border-gray-300 p-4 text-slateBlack"
            placeholder="Ben"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-semibold text-slateBlack">
            Last Name*
          </label>
          <input
            type="text"
            className="mt-2 w-full rounded-md border border-gray-300 p-4 text-slateBlack"
            placeholder="Wright"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-semibold text-slateBlack">
            Email
          </label>
          <input
            type="email"
            className="mt-2 w-full rounded-md border border-gray-300 p-4 text-slateBlack"
            placeholder="ben@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 p-4">
        <Button
          label="Save"
          className="w-full bg-primary p-4 text-white"
          onClick={handleSave}
        />
      </div>
    </div>
  )
}
