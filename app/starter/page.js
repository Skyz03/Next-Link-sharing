'use client'

import { useState, useEffect } from 'react'
import InsideHeader from '../components/headers/InsideHeader'
import AddNewLink from './AddNewLink'
import Image from 'next/image'
import LinkCard from './LinkCard'
import SaveButton from '../components/forms/SaveButton'

export default function Starter() {
  const [links, setLinks] = useState([{ platform: null, value: '' }])

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem('links')) || []
    if (storedLinks.length > 0) {
      setLinks(storedLinks)
    }
  }, [])

  const handleAddLink = () => {
    setLinks([...links, { platform: null, value: '' }])
  }

  const handleRemoveLink = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index)
    setLinks(updatedLinks)
  }

  const handleLinkChange = (e, index) => {
    const updatedLinks = [...links]
    updatedLinks[index].value = e.target.value
    setLinks(updatedLinks)
  }

  const handlePlatformChange = (platform, index) => {
    const updatedLinks = [...links]
    updatedLinks[index].platform = platform
    setLinks(updatedLinks)
  }

  const handleSave = () => {
    localStorage.setItem('links', JSON.stringify(links))
    console.log('Links saved:', links)
  }

  return (
    <div className="text-slateBlack">
      <InsideHeader />

      {/* Pass handleAddLink to AddNewLink */}
      <AddNewLink onAddLink={handleAddLink} />

      <div className="rounded-md bg-lightGray p-7 text-center shadow-lg">
        <Image
          src="/assets/images/illustration-empty.svg"
          width={120}
          height={120}
          alt="Illustration indicating getting started"
          className="mx-auto w-full"
        />
        <h1 className="mt-4 text-xl font-bold">Let&apos;s get you started</h1>
        <p className="mt-2 text-midGray">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We&apos;re here to help you
          share your profiles with everyone!
        </p>
      </div>

      {/* Disable SaveButton if no links */}
      <SaveButton onClick={handleSave} disabled={links.length === 0} />

      {links.map((link, index) => (
        <div key={index} className="mt-4">
          <LinkCard
            selectedPlatform={link.platform}
            value={link.value}
            onChange={(e) => handleLinkChange(e, index)}
            onRemove={() => handleRemoveLink(index)}
            onSelectPlatform={(platform) =>
              handlePlatformChange(platform, index)
            }
            linkNumber={index + 1}
          />
        </div>
      ))}
    </div>
  )
}
