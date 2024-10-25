'use client'
import { Button } from 'primereact/button'
import Image from 'next/image'
export default function ProfileView() {
  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <Button
          label="Back to Editor"
          className="w-full border border-primary bg-white p-4 text-primary"
        ></Button>

        <Button
          label="Share Link"
          className="w-full bg-primary p-4 text-white"
        ></Button>
      </div>

      <div className="mx-auto text-center text-black">
        <Image className="mx-auto" src="" width="30" height="30"></Image>

        <h1>Ben Wright</h1>
        <p>ben@example.com</p>
      </div>

    </>
  )
}
