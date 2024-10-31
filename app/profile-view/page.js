'use client'
import { Button } from 'primereact/button'
import Image from 'next/image'

// SocialButton Component for reusability
function SocialButton({ iconSrc, label, link, bgColor }) {
  return (
    <Button
      label={
        <span className="flex w-full items-center justify-between p-3">
          <div className="flex flex-row items-center justify-center">
            <Image
              src={iconSrc}
              alt={`${label} Icon`}
              width={20}
              height={20}
              className="" // Apply filter to make icon white
            />
            <p className="mx-2 font-light tracking-wide">{label}</p>
          </div>
          <Image
            src="/assets/images/icon-arrow-right.svg"
            alt="Arrow Icon"
            width={20}
            height={20}
            className="" // Apply filter to make arrow icon white
          />
        </span>
      }
      className={`w-1/2 rounded-lg text-white ${bgColor}`} // Use dynamic background color
      onClick={() => window.open(link, '_blank')} // Opens link in a new tab
    />
  )
}

export default function ProfileView() {
  // Button data array for dynamic rendering
  const socialButtons = [
    {
      label: 'GitHub',
      iconSrc: '/assets/images/icon-github.svg',
      link: 'https://github.com',
      bgColor: 'bg-gray-800', // GitHub brand color
    },
    {
      label: 'YouTube',
      iconSrc: '/assets/images/icon-youtube.svg',
      link: 'https://youtube.com',
      bgColor: 'bg-red-600', // YouTube brand color
    },
    {
      label: 'LinkedIn',
      iconSrc: '/assets/images/icon-linkedin.svg',
      link: 'https://linkedin.com',
      bgColor: 'bg-blue-700', // LinkedIn brand color
    },
  ]

  return (
    <div className="p-4">
      <div className="flex items-center justify-center gap-4">
        <Button label="Back to Editor" className="btn-secondary" />
        <Button label="Share Link" className="btn-primary" />
      </div>

      <div className="mx-auto mt-4 text-center text-black">
        <Image
          className="mx-auto rounded-full border-4 border-primary"
          src="/assets/images/profile-view-avatar.png"
          width="105"
          height="105"
          alt="Profile Picture"
        />

        <div className="mt-4">
          <h1 className="text-3xl font-bold">Ben Wright</h1>
          <p className="text-midGray">ben@example.com</p>
        </div>
      </div>

      {/* Social buttons dynamically rendered */}
      <div className="mt-4 flex flex-col items-center gap-2">
        {socialButtons.map((button, index) => (
          <SocialButton
            key={index}
            iconSrc={button.iconSrc}
            label={button.label}
            link={button.link}
            bgColor={button.bgColor} // Pass the background color to the button
          />
        ))}
      </div>
    </div>
  )
}
