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
        />

        <Button
          label="Share Link"
          className="w-full bg-primary p-4 text-white"
        />
      </div>

      <div className="mx-auto mt-4 text-center text-black">
        <Image
          className="mx-auto"
          src=""
          width="30"
          height="30"
          alt="Profile Picture"
        />

        <h1>Ben Wright</h1>
        <p>ben@example.com</p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        {/* Reusable GitHub Button with Images */}
        <Button
          label={
            <span className="flex w-full items-center justify-between">
              <Image
                src="assets/images/icon-github.svg"
                alt="GitHub Icon"
                width={20}
                height={20}
              />
              <span className="mx-2">Github</span>
              <Image
                src="assets/images/icon-arrow-right.svg"
                alt="Arrow Icon"
                width={20}
                height={20}
              />
            </span>
          }
          className="w-full bg-black p-4 text-white"
        />
        <Button
          label={
            <span className="flex w-full items-center justify-between">
              <Image
                src="assets/images/icon-github.svg"
                alt="GitHub Icon"
                width={20}
                height={20}
              />
              <span className="mx-2">Github</span>
              <Image
                src="assets/images/icon-arrow-right.svg"
                alt="Arrow Icon"
                width={20}
                height={20}
              />
            </span>
          }
          className="w-full bg-black p-4 text-white"
        />
        <Button
          label={
            <span className="flex w-full items-center justify-between">
              <Image
                src="assets/images/icon-github.svg"
                alt="GitHub Icon"
                width={20}
                height={20}
              />
              <span className="mx-2">Github</span>
              <Image
                src="assets/images/icon-arrow-right.svg"
                alt="Arrow Icon"
                width={20}
                height={20}
              />
            </span>
          }
          className="w-full bg-black p-4 text-white"
        />
      </div>
    </>
  )
}
