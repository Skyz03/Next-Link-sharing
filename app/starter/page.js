'use client'
import InsideHeader from '../components/headers/InsideHeader'
import AddNewLink from './AddNewLink'
import Image from 'next/image'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'

const platformTemplate = (option) => {
  if (option) {
    return (
      <div className="flex items-center gap-2">
        <Image
          src={`/assets/images/icon-${option.code.toLowerCase()}.svg`}
          alt={option.name}
          width={20}
          height={20}
          className="mr-2"
        />
        <span>{option.name}</span>
      </div>
    )
  }
  return null
}

export default function Starter() {
  const [selectedPlatform, setSelectedPlatform] = useState(null)
  const [value, setValue] = useState('')

  const platforms = [
    { name: 'LinkedIn', code: 'linkedin' },
    { name: 'Twitter', code: 'twitter' },
    { name: 'Facebook', code: 'facebook' },
    { name: 'GitHub', code: 'github' },
    { name: 'StackOverflow', code: 'stackoverflow' },
    { name: 'Instagram', code: 'instagram' },
  ]

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

      <Button
        label="Save"
        className="mt-6 w-full rounded-md bg-primaryLight py-3 font-semibold text-pureWhite"
      />

      <Card className="mt-8 rounded-lg bg-lightGray p-6 shadow-md">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/icon-drag-and-drop.svg"
              width={20}
              height={20}
              alt="Drag and Drop Icon"
            />
            <h3 className="font-bold text-slateBlack">Link #1</h3>
          </div>
          <p className="cursor-pointer text-red-500 hover:underline">Remove</p>
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-semibold text-black">
            Platform
          </label>
          <Dropdown
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.value)}
            options={platforms}
            optionLabel="name"
            placeholder="Select a Platform"
            valueTemplate={platformTemplate(selectedPlatform)}
            itemTemplate={(option) => (
              <div className="flex items-center gap-2 text-black">
                <Image
                  src={`/assets/images/icon-${option.code.toLowerCase()}.svg`}
                  alt={option.name}
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span>{option.name}</span>
              </div>
            )}
            className="w-full rounded-md border border-gray-300 bg-white p-2 text-black"
            panelClassName="text-black bg-white"
            showClear
            dropdownIcon={
              <Image
                src="/assets/images/icon-chevron-down.svg"
                alt="Chevron Down"
                width={16}
                height={16}
              />
            }
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-black">
            <Image
              src="/assets/images/icon-link.svg"
              width={20}
              height={20}
              alt="Link Icon"
            />
            Link
          </label>
          <div className="flex items-center rounded-md border border-gray-300 bg-white p-2">
            <Image
              src="/assets/images/icon-link.svg"
              width={20}
              height={20}
              alt="Link Icon"
              className="mr-2"
            />
            <InputText
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full border-none bg-transparent text-black focus:outline-none"
              placeholder="Enter your link"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}
