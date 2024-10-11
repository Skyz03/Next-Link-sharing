import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import Image from 'next/image' // Use this to load images in Next.js

export default function NewAccount() {
  return (
    <Card
      title="Create account"
      subTitle="Let’s get you started sharing your links!"
      className="p-m-4 headingM mt-10 shadow-none"
    >
      <div className="flex flex-col gap-4">
        {/* Email Input with Custom SVG Icon */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email address</label>
          <div className="flex items-center rounded-md border border-lightGray p-4">
            <Image
              src="/assets/images/icon-email.svg" // Path to your email SVG
              alt="Email Icon"
              width={20}
              height={20}
              className="mr-2" // Optional: to give some margin
            />
            <InputText
              className="flex-grow border-none focus:outline-none" // No extra border and auto width
              id="email"
              type="email"
              placeholder="e.g. alex@email.com"
            />
          </div>
        </div>

        {/* Password Input with Custom SVG Icon */}
        <div className="mt-4 flex flex-col gap-2">
          <label htmlFor="password">Create Password</label>
          <div className="flex items-center rounded-md border border-lightGray p-4">
            <Image
              src="/assets/images/icon-password.svg" // Path to your password SVG
              alt="Password Icon"
              width={20}
              height={20}
              className="mr-2" // Optional: to give some margin
            />
            <InputText
              className="flex-grow border-none focus:outline-none"
              id="password"
              type="password"
              placeholder="At least 8 characters"
            />
          </div>
        </div>

        {/* Password Confirmation */}
        <div className="mt-4 flex flex-col gap-2">
          <label htmlFor="password">Confirm Password</label>
          <div className="flex items-center rounded-md border border-lightGray p-4">
            <Image
              src="/assets/images/icon-password.svg" // Path to your password SVG
              alt="Password Icon"
              width={20}
              height={20}
              className="mr-2" // Optional: to give some margin
            />
            <InputText
              className="flex-grow border-none focus:outline-none"
              id="password"
              type="password"
              placeholder="At least 8 characters"
            />
          </div>
        </div>

        {/* Login Button */}
        <Button
          label="Create new account"
          icon="pi pi-sign-in"
          className="w-full rounded-md bg-primary p-4 text-white"
        />

        {/* Additional Links */}
        <div className="p-mt-3 flex flex-col items-center gap-1">
          <a>Already have an account?</a>
          <a className="text-primary">Login</a>
        </div>
      </div>
    </Card>
  )
}
