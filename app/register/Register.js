import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import Image from 'next/image'

export default function Register() {
  return (
    <Card
      title="Create account"
      subTitle="Let’s get you started sharing your links!"
      className="p-m-4 headingM mt-10 shadow-none"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email address</label>
          <div className="flex items-center rounded-md border border-lightGray p-4">
            <Image
              src="/assets/images/icon-email.svg"
              alt="Email Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <InputText
              className="flex-grow border-none focus:outline-none"
              id="email"
              type="email"
              placeholder="e.g. alex@email.com"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <label htmlFor="password">Create Password</label>
          <div className="flex items-center rounded-md border border-lightGray p-4">
            <Image
              src="/assets/images/icon-password.svg"
              alt="Password Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <InputText
              className="flex-grow border-none focus:outline-none"
              id="password"
              type="password"
              placeholder="At least 8 characters"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="flex items-center rounded-md border border-lightGray p-4">
            <Image
              src="/assets/images/icon-password.svg"
              alt="Password Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <InputText
              className="flex-grow border-none focus:outline-none"
              id="confirm-password"
              type="password"
              placeholder="At least 8 characters"
            />
          </div>
        </div>

        <Button
          label="Create new account"
          icon="pi pi-sign-in"
          className="w-full rounded-md bg-primary p-4 text-white"
        />

        <div className="p-mt-3 flex flex-col items-center gap-1">
          <a>Already have an account?</a>
          <a className="text-primary">Login</a>
        </div>
      </div>
    </Card>
  )
}
