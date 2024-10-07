import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import Image from "next/image"; // Use this to load images in Next.js

export default function LoginForm() {
  return (
    <Card
      title="Login"
      subTitle="Add your details below to get back into the app"
      className="p-m-4 mt-10 shadow-none headingM"
    >
      <div className="flex flex-col gap-4">
        {/* Email Input with Custom SVG Icon */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email address</label>
          <div className="flex items-center border border-lightGray rounded-md p-4">
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
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="password">Password</label>
          <div className="flex items-center border border-lightGray rounded-md p-4">
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
              placeholder="Enter your password"
            />
          </div>
        </div>

        {/* Login Button */}
        <Button
          label="Login"
          icon="pi pi-sign-in"
          className="p-4 w-full bg-primary rounded-md text-white"
        />

        {/* Additional Links */}
        <div className="p-mt-3 flex flex-col gap-1 items-center">
          <a>Don't have an account?</a>
          <a className="text-primary">Create account</a>
        </div>
      </div>
    </Card>
  );
}
