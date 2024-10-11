'use client'

import { useState } from 'react'
import InsideHeader from '../components/headers/InsideHeader'
import AddNewLink from './AddNewLink'
import Image from 'next/image'
import LinkCard from './LinkCard'
import PlatformDropdown from '../components/forms/PlatformDropdown'
import AddNewLinkButton from '../components/forms/AddNewLinkButton'
import SaveButton from '../components/forms/SaveButton'

export default function Starter() {
  const [links, setLinks] = useState([{ platform: null, value: '' }])
  const [selectedPlatform, setSelectedPlatform] = useState(null)
  const [value, setValue] = useState('')

  const handleAddLink = () => {
    setLinks([...links, { platform: null, value: '' }])
  }

  const handleRemoveLink = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index)
    setLinks(updatedLinks)
  }

  const handleSave = () => {
    // Add your save logic here
    console.log('Links:', links)
  }

  return (
    <div className="text-slateBlack">
      <InsideHeader />
      <AddNewLink />

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

      <SaveButton onClick={handleSave} disabled={!links.length} />

      {links.map((link, index) => (
        <div key={index} className="mt-4">
          <PlatformDropdown
            selectedPlatform={link.platform}
            onSelect={(platform) => {
              const updatedLinks = [...links]
              updatedLinks[index].platform = platform
              setLinks(updatedLinks)
            }}
          />
          <LinkCard
            platform={link.platform}
            value={link.value}
            onChange={(e) => {
              const updatedLinks = [...links]
              updatedLinks[index].value = e.target.value
              setLinks(updatedLinks)
            }}
            onRemove={() => handleRemoveLink(index)}
          />
        </div>
      ))}

      <AddNewLinkButton onClick={handleAddLink} />
    </div>
  )
}
