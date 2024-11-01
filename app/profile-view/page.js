'use client'
import { Button } from 'primereact/button'
import Image from 'next/image'

// SocialButton Component for reusability
function SocialButton({ iconSrc, label, link, bgColor, textColor }) {
  return (
    <Button
      label={
        <span
          className={`flex w-full items-center justify-between p-3 ${textColor}`}
        >
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
      className={`w-1/2 rounded-lg ${bgColor} ${textColor}`} // Use dynamic background and text color
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
      bgColor: 'bg-gray-800',
      textColor: 'text-white',
    },
    {
      label: 'YouTube',
      iconSrc: '/assets/images/icon-youtube.svg',
      link: 'https://youtube.com',
      bgColor: 'bg-red-600',
      textColor: 'text-white',
    },
    {
      label: 'LinkedIn',
      iconSrc: '/assets/images/icon-linkedin.svg',
      link: 'https://linkedin.com',
      bgColor: 'bg-blue-700',
      textColor: 'text-white',
    },
    {
      label: 'Frontend Mentor',
      iconSrc: '/assets/images/icon-frontend-mentor.svg',
      link: 'https://frontendmentor.io',
      bgColor: 'bg-white',
      textColor: 'text-black', // Set text to black for white background
    },
    {
      label: 'Twitter',
      iconSrc: '/assets/images/icon-twitter.svg',
      link: 'https://twitter.com',
      bgColor: 'bg-blue-500',
      textColor: 'text-white',
    },
    {
      label: 'Facebook',
      iconSrc: '/assets/images/icon-facebook.svg',
      link: 'https://facebook.com',
      bgColor: 'bg-blue-600',
      textColor: 'text-white',
    },
    {
      label: 'Twitch',
      iconSrc: '/assets/images/icon-twitch.svg',
      link: 'https://twitch.tv',
      bgColor: 'bg-purple-600',
      textColor: 'text-white',
    },
    {
      label: 'Dev.to',
      iconSrc: '/assets/images/icon-devto.svg',
      link: 'https://dev.to',
      bgColor: 'bg-black',
      textColor: 'text-white',
    },
    {
      label: 'Codewars',
      iconSrc: '/assets/images/icon-codewars.svg',
      link: 'https://codewars.com',
      bgColor: 'bg-red-700',
      textColor: 'text-white',
    },
    {
      label: 'FreeCodeCamp',
      iconSrc: '/assets/images/icon-freecodecamp.svg',
      link: 'https://freecodecamp.org',
      bgColor: 'bg-green-600',
      textColor: 'text-white',
    },
    {
      label: 'GitLab',
      iconSrc: '/assets/images/icon-gitlab.svg',
      link: 'https://gitlab.com',
      bgColor: 'bg-orange-600',
      textColor: 'text-white',
    },
    {
      label: 'Hashnode',
      iconSrc: '/assets/images/icon-hashnode.svg',
      link: 'https://hashnode.com',
      bgColor: 'bg-blue-500',
      textColor: 'text-white',
    },
    {
      label: 'Stack Overflow',
      iconSrc: '/assets/images/icon-stack-overflow.svg',
      link: 'https://stackoverflow.com',
      bgColor: 'bg-orange-500',
      textColor: 'text-white',
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
            bgColor={button.bgColor}
            textColor={button.textColor}
          />
        ))}
      </div>
    </div>
  )
}
